resultCountLeft = document.querySelector(".CountLeft");
resultCountRight = document.querySelector(".CountRight");

pictureLeft = document.querySelector(".left");
pictureRight = document.querySelector(".right");

btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result"); 
radioButtons = document.querySelectorAll('[name="Choice"]'); 
let myChoice = [];
const leftFoto = document.getElementById('left')
const rightFoto = document.getElementById('right')



document.getElementById("MyButton").onclick = function(){   
        /*var NumberWins = prompt('?')
        NumberWins = Number(NumberWins)*/

    let myCount = 0
    let computerCount = 0
    const choice = ['камень','ножницы','бумага'];

            radioButtons.forEach(element => { 
                for (let a = 0; a <  1; a++) {                   
                    element.addEventListener("change", function(){  
                    
                    let random = Math.floor(Math.random() * choice.length);
                    let computer = choice[random];
            


                        myChoice.shift(element.value);                        
                        myChoice.push(element.value);                          

                    console.log(myChoice[0])
                    console.log(computer);
                    
                    if (myChoice[0] === choice[0] && computer === choice[1]) {
                        leftFoto.src='img/Rock.png';
                        rightFoto.src='img/Scissors.png';
                        ++myCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }
                    
                    if (myChoice[0] === choice[1] && computer === choice[2]) {
                        leftFoto.src='img/Scissors.png';
                        rightFoto.src='img/Paper.png';
                        ++myCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }

                    if (myChoice[0] === choice[2] && computer === choice[0]) {
                        leftFoto.src='img/Paper.png';
                        rightFoto.src='img/Rock.png';
                        ++myCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }



                    if (computer === choice[0] && myChoice[0] === choice[1]) {
                        rightFoto.src='img/Rock.png';
                        leftFoto.src='img/Scissors.png';
                        ++computerCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }

                    if (computer === choice[1] && myChoice[0] === choice[2]) {
                        rightFoto.src='img/Scissors.png';
                        leftFoto.src='img/Paper.png';
                        ++computerCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }

                    if (computer === choice[2] && myChoice[0] === choice[0]) {
                        rightFoto.src='img/Paper.png';
                        leftFoto.src='img/Rock.png';
                        ++computerCount
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }


                    if (computer === myChoice[0]) {
                        leftFoto.src='img/moloko.png';
                        rightFoto.src='img/moloko.png';
                        document.querySelector('[name="Choice"]:checked').checked = false;
                    }


                    /*if (myCount === NumberWins){
                        alert(`Конец игры счет ${myCount} : ${computerCount}  Победил!`)
                    }
                    if (computerCount === NumberWins){
                        alert(`Конец игры счет ${myCount} : ${computerCount} Компьютер Победил!`)

                    }
                    */


                    resultCountLeft.innerHTML = `MyCount: ${myCount}`;
                    resultCountRight.innerHTML = `Computer: ${computerCount}`;
                    
            });
        };
    });
};


