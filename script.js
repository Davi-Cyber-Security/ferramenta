const button = document.getElementById("button");
const titulo = document.getElementById("titulo");
const body = document.querySelector("body");
const aBox = document.getElementById("aBox");
const darkBox = document.querySelector(".darkBox")
const divBox = document.querySelector(".box-select");

    // function adicion(){
    //     button.classList.toggle("switchOn");        
    //     body.classList.toggle("Ligth");
    //    aBox.classList.toggle("black")
    // }

    // button.addEventListener("click", adicion)



    // Creation of selected content all
    function creatInfo(){
        // button
        const todos = document.querySelector("#todos")
        // father of div
        const infoCreate = document.querySelector(".create-father");
        todos.addEventListener("click", () => {
            infoCreate.classList.toggle("infoTxt")
            
            infoCreate.innerHTML = `<div class="infoCreate">
                <h2 class="subtitulo">Essas são as melhores ferramentas disponíveis</h2>
                <br>
                
                <div class="ferramentas">
                    <p class="creat">Criação de Music: (clique aqui)<a href="https://brev.ai/pt/app" class="openAi">MusicAI</a>
                        
                    <p class="creat">Pdf editável: (clique aqui)<a href="https://www.ilovepdf.com/pt/editar-pdf" class="openAi">pdf edit</a>

                        <p class="creat">Melhoria de imagem: (clique aqui)<a href="https://www.iloveimg.com/pt/ampliar-imagem" class="openAi">image</a> 
                        
                            <p class="creat">Chatgpt: (clique aqui)<a href="https://chatgpt.com/" class="openAi">chatAI</a>

                             <p class="creat">Pdf em word: (clique aqui)<a href="https://www.ilovepdf.com/pt" class="openAi">Word</a>

                            <p class="creat">W3schools HTML: (clique aqui)<a href="https://www.w3schools.com/html/default.asp" class="openAi">HTML</a>
                            <p class="creat">W3schools Css: (clique aqui)<a href="https://www.w3schools.com/css/" class="openAi">CSS</a>
                            <p class="creat">W3schools JS: (clique aqui)<a href="https://www.w3schools.com/js/default.asp" class="openAi">Javascript</a></p>

                             <p class="creat">Block AI: (clique aqui)<a href="https://www.blackbox.ai/" class="openAi">Block AI</a></p>
                    </p>
                </div>
            </div>`;
        })
    }

    creatInfo()