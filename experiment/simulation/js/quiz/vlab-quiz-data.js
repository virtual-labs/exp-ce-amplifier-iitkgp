/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Determine what would happen to the voltage gain of a common-emitter transistor amplifier circuit. If the resistance R<sub>c</sub> is changed, then Av<br/><p style=\"text-align:center\"><img src=\"image/bjtampq1.png\" style=\"width:350px;height:300px\"></p> ",
            "a": [
                {"option": "Increase", "correct": false},
                {"option": "Doesnot Change ", "correct": false},
                {"option": " Decrease", "correct":true},
               // {"option": " 2.7 k&#937;", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Determine what would happen to the voltage gain of a common-emitter transistor amplifier circuit. If the resistance R<sub>bias1</sub> is changed, then Av<br/><p style=\"text-align:center\"><img src=\"image/bjtampq2.png \" style=\"width:350px;height:300px\"></p>  ",
            "a": [
                {"option": "Increase ", "correct":true},
                {"option": " Decrease", "correct": false},
                {"option": "Doesnot Change ", "correct": false},
              //  {"option": " 3.333 m&#937;", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Determine what would happen to the voltage gain of a common-emitter transistor amplifier circuit. If the resistance R<sub>bias2</sub> is changed, then Av <br/><p style=\"text-align:center\"><img src=\"image/bjtampq3.png \" style=\"width:350px;height:300px\"></p>",
            "a": [
                {"option": "Increase ", "correct": false},
                {"option": " Decrease", "correct": false},
                {"option": " Doesnot Change", "correct": true},
              //  {"option": " it is impossible to determine the change in the resistor value", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "For a common-emitter amplifier, the purpose of swamping is",
            "a": [
                {"option": "To minimize gain ", "correct": false},
                {"option": "To reduce the effect of r'<sub>e</sub> ", "correct":true},
                {"option": "To maximize gain", "correct": false},
                {"option": "No purpose ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Single True Answer
            "q": "Fill in the blanks:A common-emitter amplifier has ________ voltage gain, ________ current gain, ________ power gain, and ________ input impedance. ",
            "a": [
                {"option": " high, high, high, low ", "correct": true},
                {"option": "high, low, high, low", "correct": false},
                {"option": "high, high, high, high ", "correct": false},
                {"option": " low, low, low, high ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 6 - Multiple Choice, Single True Answer
            "q": "Which one of the following statements is correct about an ac-coupled common-emitter amplifier operating in the mid-band region?",
            "a": [
                {"option": " The device parasitic capacitances, coupling capacitances and bypass capacitances behave like open circuits ", "correct": false},
                {"option": "The device parasitic capacitances, coupling capacitances and bypass capacitances behave like short circuits", "correct": false},
                {"option": "The device parasitic capacitances behave like short circuits, whereas coupling and bypass capacitances behave like open circuits ", "correct": false},
                {"option": " The device parasitic capacitances behave like open circuits, whereas coupling and bypass capacitances behave like short circuits. ", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 7 - Multiple Choice, Single True Answer
            "q": "For the low-frequency response of a BJT amplifier, the maximum gain is where ________ ",
            "a": [
                {"option": " R<sub>B</sub>=0 &#937; ", "correct": false},
                {"option": "R<sub>C</sub>=0 &#937;", "correct": false},
                {"option": "R<sub>E</sub>=0 &#937;", "correct": true},
                {"option": " R<sub>L</sub>=0 &#937; ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 8 - Multiple Choice, Single True Answer
            "q": "What is the normalized gain expressed in dB for the cutoff frequencies?",
            "a": [
                {"option": "-6 dB ", "correct": false},
                {"option": "-3 dB ","correct":true },
                {"option": "-20 dB ","correct": false},
                {"option": " +3dB ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 9 - Multiple Choice, Single True Answer
            "q": "What magnitude voltage gain corresponds to a decibel gain of 50?",
            "a": [
                {"option": "31.6238 ", "correct": false},
                {"option": "316.228	","correct":true },
                {"option": "3162.38 ","correct": false},
                {"option": " 31623.8 ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 10 - Multiple Choice, Single True Answer
            "q": "The decibel (dB) is defined such that ________ decibel(s) = ________ bel(s).",
            "a": [
                {"option": "1, 10 ", "correct": false},
                {"option": "10, 10	","correct":false},
                {"option": "10, 1","correct": true},
                {"option": "1, 1 ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
         
   
    ]
};





