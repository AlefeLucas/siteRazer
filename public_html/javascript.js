jQuery(document).ready(function () {



    var navOffset = jQuery("nav").offset().top;

    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

    jQuery(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();



        if (scrollPos >= navOffset) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }

    });


});


function removeuolbodycadastro(){
     document.getElementById("bodyindex").innerHTML= "<title>Cadastro</title>      <meta charset=\"UTF-8\">      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><script type=\"text/javascript\" src=\"jquery-1.11.3.js\"></script>      <script type=\"text/javascript\" src=\"javascript.js\"></script>      <link  type=\"text/css\" rel=\"stylesheet\" href=\"style.css\"><header>         <img src=\"img/logo1.png\" style=\"width: 50em\" />         <nav >                           <ul class=\"menu\">                  <li><a href=\"index.html\">Home</a></li>                  <li>                     <a href=\"#\">Produtos</a>                     <ul>                        <li><a href=\"mouse.html\">Mouses</a>                        </li>                        <li><a href=\"teclado.html\">Teclados</a>                        </li>                     </ul>                  </li>                  <li><a href=\"sobre.html\">Sobre</a></li>                  <li><a href=\"cadastro.html\">Cadastro</a></li>               </ul>                     </nav>      </header>        <section>            <form id=\"cadastro\" onsubmit=\"verify()\">                <div class=\"divblockcenter\">                    <h1>Cadastro de Cliente</h1>                </div>                <div class=\"divblockcenter\">                    <label class=\"radiostyle\"><input onchange=\"clientetype()\" checked=\"true\" id=\"fisico\" class=\"inputtext\" type=\"radio\" name=\"cliente\" value=\"Fisica\"/>Física</label>                    <div style=\"width: 5em; display: inline-block\"></div>                    <label class=\"radiostyle\"><input onchange=\"clientetype()\" id=\"juridico\" class=\"inputtext\" type=\"radio\" name=\"cliente\" value=\"Juridica\"/>Jurídica</label>                </div>                <div class=\"divblock\">                    <div class=\"rotdiv\">                        <label class=\"rotulo\">Nome: </label>                    </div>                    <input id=\"nome\" required type=\"text\" style=\"width: 23em\"/>                    <label class=\"rotulo\" style=\"margin-left: 2em;\">Sexo: </label>                    <select id=\"sexo\">                        <option value=\"M\">Masculino</option>                        <option value=\"F\">Feminino</option>                        <option value=\"O\">Outro</option>                    </select>                </div>                <div class=\"divblock\">                    <div class=\"rotdiv\">                        <label class=\"rotulo\">Endereço: </label>                    </div>                    <input id=\"endereco\" required type=\"text\" style=\"width: 35.5em\"/>                </div>                <div class=\"divblock\">                    <div class=\"rotdiv\">                        <label class=\"rotulo\">CPF: </label>                    </div>                    <input id=\"cpf\" type=\"text\" style=\"width: 23em\"/>                </div>                <div class=\"divblock\">                    <div class=\"rotdiv\">                        <label class=\"rotulo\">CNPJ: </label>                    </div>                    <input disabled id=\"cnpj\" type=\"text\" style=\"width: 23em\"/>                </div>                <div class=\"divblock\">                    <div class=\"rotdiv\">                        <label id=\"telefone\" class=\"rotulo\">Telefone: </label>                    </div>                    <input required type=\"text\" style=\"width: 35.5em\"/>                </div>                <div class=\"divblockcenter\">                    <input type=\"submit\" value=\"Salvar\"/>                    <div style=\"width: 5em; display: inline-block\"></div>                    <input type=\"reset\" value=\"Limpar\" onclick=\"initiate();\"/>                </div>            </form>        </section>";
     console.log("EXECUTOU");
     
}


function removeuolbodyindex(){
     document.getElementById("bodyindex").innerHTML= "<title>Home</title><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><script type=\"text/javascript\" src=\"jquery-1.11.3.js\"></script>      <script type=\"text/javascript\" src=\"javascript.js\"></script>      <link  type=\"text/css\" rel=\"stylesheet\" href=\"style.css\">"+
             "<header>            <img src=\"img/logo1.png\" style=\"width: 50em\" />            <nav >                <ul class=\"menu\">                    <li><a href=\"index.html\">Home</a></li>                    <li>                        <a href=\"#\">Produtos</a>                        <ul>                            <li><a href=\"mouse.html\">Mouses</a>                            </li>                            <li><a href=\"teclado.html\">Teclados</a>                            </li>                        </ul>                    </li>                    <li><a href=\"sobre.html\">Sobre</a></li>                    <li><a href=\"cadastro.html\">Cadastro</a></li>					<!--					<li>                        <a href=\"#\">Parceiros</a>                        <ul>                            <li><a href=\"mouse.html\">Trio Net</a>                            </li>                            <li><a href=\"teclado.html\">Etc</a>                            </li>                        </ul>                    </li>					-->                </ul>            </nav>        </header>        <section id=\"indexsec\">            <center>                                    <img id=\"slide\" src=\"img/slide/3.png\"/>                    <div>                        <h3> Lançamento de Produtos:</h3>                        <p> Na BGS deste ano, a Razer expôs alguns dos produtos que vão trazer para o nosso mercado.                            Alguns deles são: o Cyclosa, o Nabu,o Firefly e o Kraken mobile. Nesse post eu irei falar                             um pouco mais sobre eles e como a Razer trará estes gadgets para o Brasil.</p>                        <p> Vamos aos Gadgets?                        </p>                        <h3>Cyclosa</h3>                        <p>O Cyclosa é um novo combo que a Razer fez para países emergentes trazendo o teclado Cyclosa mais                            barato em conjunto de um mouse Razer Abyssus por um preço acessível. Ele tem quatro opções                             de cores e todas estão disponíveis para escolha via Razer Synapse(software da Razer para                             configuração dos Gadgets), foram tiradas as macro keys e seus botões não são mecânicos.                             O Cyclosa terá um preço acessível para todos os gamers que querem um equipamento de qualidade                            e com um preço acessível.                        </p>                        <img src=\"img/index/index2.png\"/>                        <h3>Nabu</h3>                        <p>O Nabu é a novidade mais quente da Razer até agora, ele é uma smartband. Porém, esse equipamento                            que aparenta ser pequeno relógio, tem muitas ferramentas legais a oferecer, como a opção de                             marcar a quilometragem da sua corrida, quantas calorias foram gastas e sua velocidade,                            entre outras funções fitness.</p>                        <p>Além disso, o Nabu tem uma facilidade extrema de compartilhar informações com seus amigos.                            Por exemplo, se duas pessoas apertam suas mãos usando o “relógio”, seus perfis no Facebook                             virarão amigos, ou se essas pessoas estiverem correndo e uma passa perto da outra os dados                            das corridas serão trocados, permitindo uma maior integração entre as pessoas que usam o equipamento.                        </p>                        <p>Como o Nabu é opensource(código aberto), outras pessoas poderão desenvolver ferramentas para o relógio,                            porém a Razer também irá continuar desenvolvendo ferramentes, o dispositivo já conta, inclusive, com                            uma ferramenta para você cadastrar o cartão de crédito e pagar por NFC.                        </p>                        <img src=\"img/index/index1.png\"/>                        <h3>Firefly</h3>                        <p>O Firefly é o novo mousepad que a Razer está lançando para os amantes de cores. Ele tem luzes LED que podem                            brilhar em uma cor ou também na função Chroma(cores alternantes), o que faz o mousepad brilhar em todas                            as cores disponíveis. O equipamento usa um tecido muito bom e suave para um melhor movimento do seu mouse                            e seu tamanho oferece bastante espaço para movimentação.                        </p>                        <img src=\"img/index/index3.png\"/>                        <h3>Kraken</h3>                        <p>O Kraken Mobile é uma versão para celulares e tablets do fone Kraken já disponível para PCs e Macs. Essa versão                            diferente do fone nos presenteia com um controle de volume, botões para controlar suas músicas e um microfone                            embutido dentro do controle, para que você possa atender a uma ligação sem precisar desconectar o dispositivo.                        </p>                        <img src=\"img/index/index4.png\"/>                    </div>                           </center>        </section>";
     console.log("EXECUTOU");
     
}



function verify() {
    var isFisico = document.getElementById("fisico").checked;

    var campo;
    var tamanho;


    if (isFisico) {
        campo = "cpf";
        tamanho = 11;
    } else {
        campo = "cnpj";
        tamanho = 14;
    }

    var valor = document.getElementById(campo).value;

    if (valor.length !== tamanho) {
        alert(campo.toUpperCase() + " inválido!");
        
        
    }



}


function initiate() {

    document.getElementById("fisico").checked = true;
    document.getElementById("juridico").checked = false;
    clientetype();
}

function clientetype() {
    var isFisico = document.getElementById("fisico").checked;

    if (isFisico) {
        document.getElementById("cnpj").disabled = true;
        document.getElementById("cpf").disabled = false;
        //document.getElementById("cpf").required = true;
        document.getElementById("sexo").disabled = false;
    } else {
        document.getElementById("cnpj").disabled = false;
        document.getElementById("cpf").disabled = true;
        //document.getElementById("cpf").required = false;
        document.getElementById("sexo").disabled = true;

    }
}

function slide(x) {
    if (x >= 6) {
        x = 0;
    }
    var num = x + 1;
    
    document.getElementById('slide').src = "img/slide/" + num.toString() + ".png";
    setTimeout(function () {

        slide(num);
    }, 3000);
}



