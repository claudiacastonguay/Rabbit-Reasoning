function goToTutorial(){
    location.replace("tutorial.html")
}
function goToInductive1(){
    location.replace("questions.html")
}
function goToDeductive(){
    document.querySelector("#change-state1").style.display = 'none';
    document.querySelector("#change-state2").style.display = 'none';
    document.querySelector("#change-state3").style.display = 'none';
    document.querySelector("#change-state4").style.display = 'none';
    document.querySelector("#change-state6").style.display = 'none';
    document.querySelector("#change-state7").style.display = 'none';
    document.querySelector("#change-state5").style.display = 'block';
    document.querySelector("#change-state8").style.display = 'none';
    document.querySelector("#what-is").style.display = 'none';
    document.querySelector("#deductive-title").style.display = 'flex';
}
// GET ANSWER RIGHT

function Correct1(){
    document.querySelector("#square-choice").style.border = '5px solid green';
    document.querySelector("#square-choice").style.backgroundColor = '#bbffb9';
    document.querySelector("#check").style.display = 'block';
    document.querySelector("#rabbit").style.display = 'none';
    document.querySelector("#rabbit-good").style.display = 'block';
    document.querySelector("#chat-box").style.display = 'block';
    document.querySelector("#feedback1").style.display = 'block';
    document.querySelector("#next").style.display = 'flex';
}
function Correct2(){
    document.querySelector("#second-choice-behind").style.border = '5px solid green';
    document.querySelector("#second-choice-behind").style.backgroundColor = '#bbffb9';
    document.querySelector("#check2").style.display = 'block';
    document.querySelector("#rabbit2-good").style.display = 'block';
    document.querySelector("#chat2").style.display = 'block';
    document.querySelector("#feedback1q2").style.display = 'block';
    document.querySelector("#rabbit2").style.display = 'none';
    document.querySelector("#to-third-question").style.display = 'flex';
}
function Correct3(){
    document.querySelector("#choice1").style.border = '5px solid green';
    document.querySelector("#choice1").style.backgroundColor = '#bbffb9';
    document.querySelector("#check3").style.display = 'block';
    document.querySelector("#rabbit3-good").style.display = 'block';
    document.querySelector("#chat3").style.display = 'block';
    document.querySelector("#feedback1q3").style.display = 'block';
    document.querySelector("#rabbit3").style.display = 'none';
    document.querySelector("#to-fourth-question").style.display = 'flex';
}
function Correct4(){
    document.querySelector("#square2").style.border = '5px solid green';
    document.querySelector("#square2").style.backgroundColor = '#bbffb9';
    document.querySelector("#check4").style.display = 'block';
    document.querySelector("#rabbit4-good").style.display = 'block';
    document.querySelector("#chat4").style.display = 'block';
    document.querySelector("#deductivechat1").style.display = 'block';
    document.querySelector("#rabbit4").style.display = 'none';
    document.querySelector("#to-fifth-question").style.display = 'flex';
}
function Correct5(){
    document.querySelector("#greenchoice").style.border = '5px solid green';
    document.querySelector("#greenchoice").style.backgroundColor = '#bbffb9';
    document.querySelector("#greencheck").style.display = 'block';
    document.querySelector("#rabbit5-good").style.display = 'block';
    document.querySelector("#chat5").style.display = 'block';
    document.querySelector("#deductivechatq2").style.display = 'block';
    document.querySelector("#rabbit5").style.display = 'none';
    document.querySelector("#to-sixth-question").style.display = 'flex';
}
function Correct6(){
    document.querySelector("#bothchoice").style.border = '5px solid green';
    document.querySelector("#bothchoice").style.backgroundColor = '#bbffb9';
    document.querySelector("#shirtcheck").style.display = 'block';
    document.querySelector("#rabbit6-good").style.display = 'block';
    document.querySelector("#chat6").style.display = 'block';
    document.querySelector("#deductivechatq3").style.display = 'block';
    document.querySelector("#rabbit6").style.display = 'none';
    document.querySelector("#to-end").style.display = 'flex';
}
//

//GET ANSWER WRONG

function Incorrect1(){
    document.querySelector("#triangle-choice").style.border = '5px solid red';
    document.querySelector("#triangle-choice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#x").style.display = 'block';
    document.querySelector("#rabbit").style.display = 'none';
    document.querySelector("#rabbit-bad").style.display = 'block';
    document.querySelector("#chat-box").style.display = 'block';
    document.querySelector("#feedback2").style.display = 'block';
    document.querySelector("#next").style.display = 'flex';
    document.querySelector("#square-choice").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check").style.display = 'block';
    document.querySelector("#health-bar5").style.display = 'block';
    document.querySelector("#health-bar").style.display = 'none';
}
function Incorrect2(){
    document.querySelector("#first-choice-behind").style.border = '5px solid red';
    document.querySelector("#first-choice-behind").style.backgroundColor = '#FFCCCB';
    document.querySelector("#x2").style.display = 'block';
    document.querySelector("#rabbit2").style.display = 'none';
    document.querySelector("#rabbit2-bad").style.display = 'block';
    document.querySelector("#chat2").style.display = 'block';
    document.querySelector("#feedback2q2").style.display = 'block';
    document.querySelector("#to-third-question").style.display = 'flex';
    document.querySelector("#second-choice-behind").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check2").style.display = 'block';
    document.querySelector("#health-bar4").style.display = 'block';
    document.querySelector("#health-bar5").style.display = 'none';
}
function Incorrect3TopRight(){
    document.querySelector("#choice2").style.border = '5px solid red';
    document.querySelector("#choice2").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xtopright").style.display = 'block';
    document.querySelector("#rabbit3").style.display = 'none';
    document.querySelector("#rabbit3-bad").style.display = 'block';
    document.querySelector("#chat3").style.display = 'block';
    document.querySelector("#feedback2q3").style.display = 'block';
    document.querySelector("#to-fourth-question").style.display = 'flex';
    document.querySelector("#choice1").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check3").style.display = 'block';
    document.querySelector("#health-bar3").style.display = 'block';
    document.querySelector("#health-bar4").style.display = 'none';
}
function Incorrect3BottomRight(){
    document.querySelector("#third-choice").style.border = '5px solid red';
    document.querySelector("#third-choice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xbottomright").style.display = 'block';
    document.querySelector("#rabbit3").style.display = 'none';
    document.querySelector("#rabbit3-bad").style.display = 'block';
    document.querySelector("#chat3").style.display = 'block';
    document.querySelector("#feedback2q3").style.display = 'block';
    document.querySelector("#to-fourth-question").style.display = 'flex';
    document.querySelector("#choice1").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check3").style.display = 'block';
    document.querySelector("#health-bar3").style.display = 'block';
    document.querySelector("#health-bar4").style.display = 'none';
}
function Incorrect3BottomLeft(){
    document.querySelector("#fourth-choice").style.border = '5px solid red';
    document.querySelector("#fourth-choice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xbottomleft").style.display = 'block';
    document.querySelector("#rabbit3").style.display = 'none';
    document.querySelector("#rabbit3-bad").style.display = 'block';
    document.querySelector("#chat3").style.display = 'block';
    document.querySelector("#feedback2q3").style.display = 'block';
    document.querySelector("#to-fourth-question").style.display = 'flex';
    document.querySelector("#choice1").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check3").style.display = 'block';
    document.querySelector("#health-bar3").style.display = 'block';
    document.querySelector("#health-bar4").style.display = 'none';
}
function IncorrectCircle(){
    document.querySelector("#circle1").style.border = '5px solid red';
    document.querySelector("#circle1").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xcircle").style.display = 'block';
    document.querySelector("#rabbit4").style.display = 'none';
    document.querySelector("#rabbit4-bad").style.display = 'block';
    document.querySelector("#chat4").style.display = 'block';
    document.querySelector("#deductivechat2").style.display = 'block';
    document.querySelector("#to-fifth-question").style.display = 'flex';
    document.querySelector("#square2").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check4").style.display = 'block';
    document.querySelector("#health-bar2").style.display = 'block';
    document.querySelector("#health-bar3").style.display = 'none';
}
function IncorrectTriangle(){
    document.querySelector("#triangle3").style.border = '5px solid red';
    document.querySelector("#triangle3").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xtriangle").style.display = 'block';
    document.querySelector("#rabbit4").style.display = 'none';
    document.querySelector("#rabbit4-bad").style.display = 'block';
    document.querySelector("#chat4").style.display = 'block';
    document.querySelector("#deductivechat2").style.display = 'block';
    document.querySelector("#to-fifth-question").style.display = 'flex';
    document.querySelector("#square2").style.backgroundColor = '#C7FFD3';
    document.querySelector("#check4").style.display = 'block';
    document.querySelector("#health-bar2").style.display = 'block';
    document.querySelector("#health-bar3").style.display = 'none';
}
function IncorrectYellow(){
    document.querySelector("#yellowchoice").style.border = '5px solid red';
    document.querySelector("#yellowchoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xyellow").style.display = 'block';
    document.querySelector("#rabbit5").style.display = 'none';
    document.querySelector("#rabbit5-bad").style.display = 'block';
    document.querySelector("#chat5").style.display = 'block';
    document.querySelector("#deductivechat2q2").style.display = 'block';
    document.querySelector("#to-sixth-question").style.display = 'flex';
    document.querySelector("#greenchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#greencheck").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'block';
    document.querySelector("#health-bar2").style.display = 'none';
}
function IncorrectRed(){
    document.querySelector("#redchoice").style.border = '5px solid red';
    document.querySelector("#redchoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xred").style.display = 'block';
    document.querySelector("#rabbit5").style.display = 'none';
    document.querySelector("#rabbit5-bad").style.display = 'block';
    document.querySelector("#chat5").style.display = 'block';
    document.querySelector("#deductivechat2q2").style.display = 'block';
    document.querySelector("#to-sixth-question").style.display = 'flex';
    document.querySelector("#greenchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#greencheck").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'block';
    document.querySelector("#health-bar2").style.display = 'none';
}
function IncorrectBlue(){
    document.querySelector("#bluechoice").style.border = '5px solid red';
    document.querySelector("#bluechoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xblue").style.display = 'block';
    document.querySelector("#rabbit5").style.display = 'none';
    document.querySelector("#rabbit5-bad").style.display = 'block';
    document.querySelector("#chat5").style.display = 'block';
    document.querySelector("#deductivechat2q2").style.display = 'block';
    document.querySelector("#to-sixth-question").style.display = 'flex';
    document.querySelector("#greenchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#greencheck").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'block';
    document.querySelector("#health-bar2").style.display = 'none';
}
function IncorrectRedShirt(){
    document.querySelector("#redshirtchoice").style.border = '5px solid red';
    document.querySelector("#redshirtchoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xredshirt").style.display = 'block';
    document.querySelector("#rabbit6").style.display = 'none';
    document.querySelector("#rabbit6-bad").style.display = 'block';
    document.querySelector("#chat6").style.display = 'block';
    document.querySelector("#deductivechat2q3").style.display = 'block';
    document.querySelector("#to-end").style.display = 'flex';
    document.querySelector("#bothchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#shirtcheck").style.display = 'block';
    document.querySelector("#health-bar0").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'none';
}
function IncorrectDress(){
    document.querySelector("#dresschoice").style.border = '5px solid red';
    document.querySelector("#dresschoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xdress").style.display = 'block';
    document.querySelector("#rabbit6").style.display = 'none';
    document.querySelector("#rabbit6-bad").style.display = 'block';
    document.querySelector("#chat6").style.display = 'block';
    document.querySelector("#deductivechat2q3").style.display = 'block';
    document.querySelector("#to-end").style.display = 'flex';
    document.querySelector("#bothchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#shirtcheck").style.display = 'block';
    document.querySelector("#health-bar0").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'none';
}
function IncorrectOrangeShirt(){
    document.querySelector("#orangeshirtchoice").style.border = '5px solid red';
    document.querySelector("#orangeshirtchoice").style.backgroundColor = '#FFCCCB';
    document.querySelector("#xorangeshirt").style.display = 'block';
    document.querySelector("#rabbit6").style.display = 'none';
    document.querySelector("#rabbit6-bad").style.display = 'block';
    document.querySelector("#chat6").style.display = 'block';
    document.querySelector("#deductivechat2q3").style.display = 'block';
    document.querySelector("#to-end").style.display = 'flex';
    document.querySelector("#bothchoice").style.backgroundColor = '#C7FFd3';
    document.querySelector("#shirtcheck").style.display = 'block';
    document.querySelector("#health-bar0").style.display = 'block';
    document.querySelector("#health-bar1").style.display = 'none';
}
//


//CHANGE PAGE/QUESTION
function goToInductiveQ2(){
    document.querySelector("#change-state1").style.display = 'none';
    document.querySelector("#change-state2").style.display = 'block';
}
function goToInductiveQ3(){
    document.querySelector("#change-state2").style.display = 'none';
    document.querySelector("#change-state3").style.display = 'block';
}
function goToTransition(){
    document.querySelector("#change-state3").style.display = 'none';
    document.querySelector("#change-state4").style.display = 'block';
}
function goToDeductive(){
    document.querySelector("#change-state4").style.display = 'none';
    document.querySelector("#change-state5").style.display = 'block';
    document.querySelector("#what-is").style.display = 'none';
    document.querySelector("#deductive-title").style.display = 'flex';

}
function goToDeductiveQ2(){
    document.querySelector("#change-state5").style.display = 'none';
    document.querySelector("#change-state6").style.display = 'block';
}
function goToDeductiveQ3(){
    document.querySelector("#change-state6").style.display = 'none';
    document.querySelector("#change-state7").style.display = 'block';
}
function goToFinish(){
    document.querySelector("#change-state7").style.display = 'none';
    document.querySelector("#change-state8").style.display = 'block';
    document.querySelector("#deductive-title").style.display = 'none';
    document.querySelector("#bar-title").style.display = 'none';
    document.querySelector("#header-health").style.display = 'block';
    document.querySelector("#header-health").style.zIndex = '2';
    document.querySelector("#header-health").style.top = '10%';
}
function goToStart(){
    location.replace("index.html")
}
//