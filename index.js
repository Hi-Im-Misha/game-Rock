bottomPlay = document.getElementById("MyButton")
resultCountLeft = document.querySelector(".CountLeft");
resultCountRight = document.querySelector(".CountRight");

pictureLeft = document.querySelector(".left");
pictureRight = document.querySelector(".right");

resultElement = document.querySelector(".result"); 
radioButtons = document.querySelectorAll('[name="Choice"]'); //Поменять By на SELECTOR

inputElement = document.querySelector(".input")
placeholder = document.getElementById("myText").placeholder;

outputElement = document.querySelector(".output")
statusBottomYes = document.querySelector(".statusBottomYes")
statusBottomNo = document.querySelector(".statusBottomNo")

leftFoto = document.getElementById('left')
rightFoto = document.getElementById('right')

/*choiceRock = document.getElementById("Choice1")
choiceScissors = document.getElementById("Choice2")
choicePaper = document.getElementById("Choice3")*/
/* window.addEventListener('keyup', function(event) {
                            switch (event.keyCode) {
                                case 49:
                                    myChoice[0] = 'камень'
                                    break;
                                case 50:
                                    myChoice[0] = 'ножницы'
                                    break;
                                case 51:
                                    myChoice[0] = 'бумага'
                                    break;
                            }*/


const choice = ['камень','ножницы','бумага'];
let emptyList = [];
let myCount = 0;
let computerCount = 0;
let draw = 0;

const audiofirst = new Audio()//"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3");
const audiosecond = new Audio()//"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3");



bottomPlay.onclick = function(){  
        // при нажатии на кнопку появляются радио кнопки
        audiofirst.play();
        var NumberWins = parseInt(inputElement.value);

        for (let a = 0; a <  1; a++) {  

            radioButtons.forEach(element => {     
                element.addEventListener("change", function(){ 
                    
                    
                    function PlayerChoiceFunction(myChoice) {
                        myChoice = emptyList.splice(0,1, element.value);                  
                        return myChoice
                    }PlayerChoiceFunction();
                    
                    myChoice = PlayerChoiceFunction();
                    console.log(myChoice[0]);


                    function СomputerChoiceFunction(computer) {
                        random = Math.floor(Math.random() * choice.length);
                        computer = choice[random];
                        return computer  
                    }СomputerChoiceFunction();
                    computer = СomputerChoiceFunction();
                    console.log(computer);
                    


                    function OptionMenuCount(output) {
                        output = outputElement.innerHTML = `Computer: ${computer} <p>MyChoice:${myChoice}</p><p>Draw:${draw}</p>`;
                    }OptionMenuCount();

                        
                        if (myChoice[0] === choice[0] && computer === choice[1]) {
                            audiosecond.play();
                            leftFoto.src='img/Rock.png';
                            rightFoto.src='img/Scissors.png';
                            ++myCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }
                        
                        if (myChoice[0] === choice[1] && computer === choice[2]) {
                            audiosecond.play();
                            leftFoto.src='img/Scissors.png';
                            rightFoto.src='img/Paper.png';
                            ++myCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }

                        if (myChoice[0] === choice[2] && computer === choice[0]) {
                            audiosecond.play();
                            leftFoto.src='img/Paper.png';
                            rightFoto.src='img/Rock.png';
                            ++myCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }



                        if (computer === choice[0] && myChoice[0] === choice[1]) {
                            audiosecond.play();
                            rightFoto.src='img/Rock.png';
                            leftFoto.src='img/Scissors.png';
                            ++computerCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }

                        if (computer === choice[1] && myChoice[0] === choice[2]) {
                            audiosecond.play();
                            rightFoto.src='img/Scissors.png';
                            leftFoto.src='img/Paper.png';
                            ++computerCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }

                        if (computer === choice[2] && myChoice[0] === choice[0]) {
                            audiosecond.play();
                            rightFoto.src='img/Paper.png';
                            leftFoto.src='img/Rock.png';
                            ++computerCount
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }


                        if (computer === myChoice[0]) {
                            ++draw
                            audiosecond.play();
                            leftFoto.src='img/moloko.png';
                            rightFoto.src='img/moloko.png';
                            document.querySelector('[name="Choice"]:checked').checked = false;
                        }


                        if (isFinite(NumberWins) === false) {
                            NumberWins = placeholder
                        }

                        if (myCount == NumberWins){
                            alert(`Конец игры счет ${myCount} : ${computerCount} Играк Победил!`)
                            location.reload();
                        }
                        if (computerCount == NumberWins){
                            alert(`Конец игры счет ${myCount} : ${computerCount} Компьютер Победил!`)
                            location.reload();
                        }



                        function resultfunction(left, right) {
                            right = resultCountRight.innerHTML = `Computer: ${computerCount}`;
                            left =  resultCountLeft.innerHTML = `MyCount: ${myCount}`;
                        }resultfunction();


            });
        });
    };
};


statusBottomYes.onclick = function(){
    outputElement.style.visibility='visible'
    
        statusBottomNo.onclick = function(){
            outputElement.style.visibility='hidden'
        }

}
