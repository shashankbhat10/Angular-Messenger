  
## question path 1
* greet
>check_greet
  - utter_greet
* question
  - action_answer
* goodbye
  - utter_goodbye

## question path 1.1
* greet
  - utter_greet
* question
  - action_answer
* goodbye
  - utter_goodbye
* greet
>check_greet
 
## question path 2
* greet
  - utter_greet
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* goodbye
  - utter_goodbye
  
## question path 2.1
* greet
  - utter_greet
* greet
>check_multiple_greet

## question path 3
* greet
>check_multiple_greet
  - utter_greet
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* goodbye
  - utter_goodbye
*question
>check_question

## question path 4
* greet
  - utter_greet
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* goodbye
  - utter_goodbye
  
## question path 4
* greet
  - utter_greet
* question
>check_question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* question
  - action_answer
* goodbye
  - utter_goodbye


##noquestion 1
* greet
  - utter_greet
*
  - action_answer
* question
  - action_answer
* goodbye
  - utter_goodbye

##noquestion 2
* greet
  - utter_greet
* question
  - action_answer
*
  - action_answer
* goodbye
  - utter_goodbye

##nogreeting 1
* 
  - utter_greet
* question
  - action_answer
* goodbye
  - utter_goodbye

##nogreeting 2
* question
  - action_answer
* goodbye
  - utter_goodbye

## say goodbye 1
* greet
  - utter_greet
* greet
  - utter_greet
* goodbye
  - utter_goodbye
  
## say goodbye 2
* greet
  - utter_greet
* greet
  - utter_greet
* goodbye
  - utter_goodbye
* greet
  - utter_greet


## say goodbye 3
* goodbye
  - utter_goodbye
