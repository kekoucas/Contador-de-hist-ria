btn = document.getElementById("btn")

var nomeChar
var monstrosSw
var monstrosContent
var armaSw
var armaContent
var racaSw
var racaContent
var localSw
var localContent

btn.onclick = function inciar() {

    var local = document.getElementById("local").value
    var monstros = document.getElementById("monstros").value
    var arma = document.getElementById("arma").value
    var raca = document.getElementById("raca").value
    var nome = document.getElementById("nomeDoPersonagem").value
    nomeChar = nome

    monstrosSw = ''
    monstrosContent = ''
    armaSw = ''
    armaContent = ''
    racaSw = ''
    racaContent = ''
    localSw = ''
    localContent = ''

    backgroundImgs = []


    switch (local) {
        case 'Acre':
            localSw = 'Acre'
            localContent = ' a terra dos dinossauros.'
            break
        case 'Rio de Janeiro':
            localSw = 'Rio de Janeiro'
            localContent = 'onde a bala come solta'
            break
        case 'Amazonas':
            localSw = 'Amazonas'
            localContent = ' a floresta de cepos'
            break
        case 'mar':
            localSw = 'mar'
            localContent = ' foça das marianas'
            break
        default:
            console.log("local invalido")
    }
    switch (monstros) {
        case 'Macaco':
            monstrosSw = 'Macacos'
            monstrosContent = 'Os macacos resolveram intervir como os fundadores da humanidade e exterminar as pragas que os humanos se tornaram para o planeta.'
            backgroundImgs.push("https://wallpaperaccess.com/full/6347609.jpg")
            backgroundImgs.push("https://www.1zoom.me/big2/250/297376-alexfas01.jpg")
            backgroundImgs.push("http://www.fundosanimais.com/1920x1080/fotos-macacos.jpg")
            backgroundImgs.push("http://www.fundosanimais.com/1920x1080/macaco.jpg")
            break
        case 'Dragão':
            monstrosSw = 'Dragões'
            monstrosContent = 'Após uma forte erupção vulcanica repentina ocasionada pelo aquecimento global e 28 meteoritos que cairam simultâneamente, os dragões chegaram.'
            backgroundImgs.push("https://images7.alphacoders.com/315/thumb-1920-315686.jpg")
            backgroundImgs.push("https://images.alphacoders.com/110/thumb-1920-1101371.jpg")
            backgroundImgs.push("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700685209.jpg")
            backgroundImgs.push("https://taverna42.files.wordpress.com/2017/01/dragon-war.jpg")
            break
        case 'Zumbis':
            monstrosSw = 'Zumbis'
            monstrosContent = 'Os mortos resolveram sair de suas tumbas muito revoltados com a má qualidade da terra no qual foram enterrados, eles voltaram com o objetivo de comer todos humanos (menos os anões).'
            backgroundImgs.push("https://images3.alphacoders.com/160/thumb-1920-160057.jpg")
            backgroundImgs.push("https://c.wallhere.com/photos/71/a1/1920x1080_px_1dlight_action_apocalyptic_Dark_dying_horror_light-1487595.jpg!d")
            backgroundImgs.push("https://wallpaperaccess.com/full/1667948.jpg")
            backgroundImgs.push("https://s1.1zoom.me/b5050/117/342078-blackangel_1920x1080.jpg")
            break
        case 'Gigantes':
            monstrosSw = 'Gigantes'
            monstrosContent = 'Quando os cultivadores de feijão resolveram exceder o limite de feijão plantado por hectar com o intuito de obter mais dinheiro, nasceu o gigante pé de feijão que trouxe os gigantes para a terra direto do céu.'
            backgroundImgs.push("https://c.wallhere.com/photos/16/9f/1920x1080_px_fantasy_Art_Giant_knight-1256081.jpg!d")
            backgroundImgs.push("https://images8.alphacoders.com/909/thumb-1920-909968.jpg")
            backgroundImgs.push("https://s1.1zoom.me/b5134/201/Warriors_Giant_511176_1920x1080.jpg")
            backgroundImgs.push("https://observatoriodatv.uol.com.br/wp-content/uploads/2019/12/jack-o-cacador-de-gigantes.jpg")
            break
        default:
            console.log("Monstro invalido")
    }
    switch (arma) {
        case 'Violão':
            armaSw = 'grande violão'
            armaContent = `Usando seu grande violão encontrado no ${localContent}, ${nome}, que estudou todo tipo de musica para usar contra o inimigo, usou ele contra todos os ${monstrosSw} macetando a cabeça deles com seu incrivel violão que agora estava banhado de sangue!`
            break
        case 'Chicote':
            armaSw = 'Chicote'
            armaContent = `Após encontrar seu chicote ${nome}, foi ao beto carreiro para aprender mais sobre a arte de chicotear, e depois enforcou todos os ${monstrosSw} com seu incrivel Chicote, por fim, domesticou todos os ${monstrosSw} restantes usando-os para dominar o mundo!`
            break
        case 'espada':
            armaSw = 'espada'
            armaContent = ` ${nome} ameaçou todos os ${monstrosSw} fazendo com que voltassem para o local de onde vieram, os ${monstrosSw} então, com medo de sua grande espada de plastico, obedeceram a ordem de seu mestre ${nome} assim recuando.`
            break
        case 'manopla hextech':
            armaSw = 'manopla hextech'
            armaContent = `com suas manopla hextech ${nome}, saiu socando a bunda de todos os ${monstrosSw} até dizer chega.`
            break
        default:
            console.log("arma invalida")
    }
    switch (raca) {
        case 'Humano':
            racaSw = 'Humano'
            racaContent = `era um humano normal`
            break
        case 'Cachorro':
            racaSw = 'cachorro'
            racaContent = `se viu obrigado a fazer alguma coisa em relação a situção dos ${monstrosSw}.`
            break
        case 'Dinossauro':
            racaSw = 'Dinossauro'
            racaContent = `criado no acre, era um bom dinossauro, quando teve que lutar contra os ${monstrosSw} para manter seu planeta em ordem`
            break
        case 'Alien':
            racaSw = 'Alien'
            racaContent = `${nome} ao terminar seu plano com os outros aliens, quando ia dominar o mundo, a revolução dos ${monstrosSw} chegou e ele teria que ajudar a humanidade.`
            break
        default:
            console.log("raca invalido")
    }
    body = document.querySelector("body")

    body.innerHTML = ""

    body.style.backgroundImage = `url('${backgroundImgs[0]}')`;

    setInterval(changeBG, 1000)

    div1 = document.createElement("div")
    p = document.createElement("p")

    p.setAttribute('id', 'txtwr')
    div1.setAttribute('class', 'history')

    div1.appendChild(p)
    body.appendChild(div1)

    
    typeWriter()
}
var i = 0

function typeWriter() {
    var speed = 70
    var txt = `${monstrosContent} Então, nosso heroi, ${nomeChar} que é um ${racaSw}, ${racaContent} foi até o ${localSw}, ${localContent}, para reivindicar sua arma que iria usar contra os ${monstrosSw}, ${armaSw} foi o que ele encontrou então, ${armaContent} FIM`
    if (i < txt.length) {
        document.getElementById("txtwr").innerHTML += txt[i];
        i++;
        setTimeout(typeWriter, speed);
    }
}

var posicao

function changeBG() {
    var randomBack = Math.floor(Math.random() * backgroundImgs.length)
    if(posicao != randomBack) {
        document.body.style.backgroundImage = `url('${backgroundImgs[randomBack]}')`
        console.log("primeiroif: " + document.body.style.backgroundImage)
        posicao = randomBack
    }else{
        if((randomBack + 1) < 4){
            document.body.style.backgroundImage = `url('${backgroundImgs[randomBack + 1]}')`
            console.log("segundoif: " + document.body.style.backgroundImage)
        }
        posicao = randomBack + 1
    }
}
