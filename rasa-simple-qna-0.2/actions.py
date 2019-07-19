from rasa_sdk import Action
from rasa_sdk.events import SlotSet

from typing import Text, Dict, Any, List
import pandas as pd
from fuzzywuzzy import fuzz # visit https://github.com/seatgeek/fuzzywuzzy for more details
from fuzzywuzzy import process

class ActionAnswer(Action):
    def __init__(self):
        self.faq_data = pd.read_csv('./data/faq_data.csv')

    def name(self):
      return "action_answer"

    def run(self, dispatcher, tracker, domain):
        query = tracker.latest_message.get("text")
        questions = self.faq_data['question'].values.tolist()

        matched_question, score = process.extractOne(query, questions,
                                                    scorer=fuzz.token_set_ratio)  # use process.extract(.. limits = 3) to get multiple close matches

        if score > 50:  # arbitrarily chosen 50 to exclude matches not relevant to the query
            matched_row = self.faq_data.loc[self.faq_data['question'] == matched_question,]

            #document = matched_row['link'].values[0]
            #page = matched_row['page'].values[0]
            match = matched_row['question'].values[0]
            answer = matched_row['answers'].values[0]
            #response = "Here's something I found, \n\n Document: {} \n Page number: {} \n Question: {} \n Answer: {} \n".format(
                #document, page, match, answer)
            response = "Here's something I found, \nAnswer: {} \n".format(answer)
			# \n\nQuestion: {}
        else:
            response = "Sorry I couldn't find anything relevant to your query!"

        dispatcher.utter_message(response)
