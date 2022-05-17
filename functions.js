let images = [];
let actualPos = 0;
let time;

function general(game){
    let content = document.getElementById('content');

    document.getElementById('projects').style.display = "none";
    document.getElementById('content').style.display = "block";

    let article = document.createElement('article');
    article.setAttribute('id', 'art');
    content.appendChild(article);

    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'tit');
    article.appendChild(h1);

    let div = document.createElement('div');
    div.setAttribute('class', 'thingsC');
    div.setAttribute('id', 'thingsC1');
    article.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('id', 'img1');
    div.appendChild(img);

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'text1');
    div.setAttribute('id', 'text11');
    div.appendChild(div1);

    let p = document.createElement('p');
    p.setAttribute('id', 'p1');
    div1.appendChild(p);

    div = document.createElement('div');
    div.setAttribute('class', 'thingsC');
    div.setAttribute('id', 'thingsC2');
    article.appendChild(div);

    let div2 = document.createElement('div');
    div2.setAttribute('class', 'text2');
    div.appendChild(div2);

    p = document.createElement('p');
    p.setAttribute('id', 'p2');
    div2.appendChild(p);

    img = document.createElement('img');
    img.setAttribute('id', 'img2');
    div.appendChild(img);

    div = document.createElement('div');
    div.setAttribute('class', 'thingsC');
    div.setAttribute('id', 'thingsC3');
    article.appendChild(div);

    img = document.createElement('img');
    img.setAttribute('id', 'img3');
    div.appendChild(img);

    div1 = document.createElement('div');
    div1.setAttribute('class', 'text1');
    div.setAttribute('id', 'text12');
    div.appendChild(div1);

    p = document.createElement('p');
    p.setAttribute('id', 'p3');
    div1.appendChild(p);

    div = document.createElement('div');
    div.setAttribute('class', 'butts');
    div.setAttribute('id', 'butts');
    article.appendChild(div);

    div1 = document.createElement('div');
    div1.setAttribute('class', 'buttCont');
    div1.setAttribute('id', 'buttCont');
    div.appendChild(div1);

    but = document.createElement('button');
    but.setAttribute('onclick', 'projects()');
    div1.appendChild(but);

    let span = document.createElement('span');
    span.setAttribute('class', 'arrow');
    but.appendChild(span);
    span = document.createElement('span');
    span.setAttribute('class', 'return');
    span.innerHTML = "Return";
    but.appendChild(span);
    span = document.createElement('span');
    span.setAttribute('class', 'arrow');
    but.appendChild(span);

    switch(game){
        case 'dm':
            dm();
        break;

        case 'dwi':
            dwi();
        break;

        case 'ovsm':
            ovsm();
        break;

        case 'ufod':
            ufod();
        break;
    }
}

function dm(){
    let article = document.getElementById('art');
    article.setAttribute('class', 'DM');
    article.setAttribute('id', 'DMc');
    
    let h1 = document.getElementById('tit');
    h1.innerHTML = "Dodgeball Masters";
    
    let img = document.getElementById('img1');
    img.setAttribute('src', 'img/DMStadium.png');
    img.setAttribute('alt', 'DMStadium');
    
    let p = document.getElementById('p1');
    p.innerHTML = '<a class="important">Dodgeball Masters</a>' + " is a frenetic sports game where " + '<a class="important">two teams</a>' + 
    " face each other. Their objective: " + 
    "take down the opposing team in a " + '<a class="important">best-of-three match</a>' + ". But this is not like the typical Dodgeball " + 
    "everyone knows. In " + '<a class="important">Dodgeball Masters</a>' + ", every character have their own stats and have one special " + 
    '<a class="important">super throw</a>' + "." + '<br>' + '<br>' + 
    "This project was made by " + '<a class="important">Malaka Studio</a>' + ", an indie video game studio conformed by a group " + 
    "of colleagues, as a personal project. Made with personal-made engine using " + '<a class="important">OpenGL</a>' + 
    " libraries, using " + '<a class="important">ECS</a>' + " and " + '<a class="important">facade</a>' + " patterns and launched for the Linux operative system. Here " + 
    "I took part as " + '<a class="important">gameplay programmer</a>' + " and " + '<a class="important">AI programmer</a>' + ", developing important things as the player's " + 
    "mechanics, all the super throws the characters has and controlling when the AI has to retreat or " + 
    "advance in order not to get killed among others.";
    
    p = document.getElementById('p2');
    p.innerHTML = '<a class="important">Dodgeball Masters</a>' + " has a roster of " + '<a class="important">8 charismatic characters</a>' + 
    ", with their own pre-recorded voices, " + 
    "and they go from a trap singer who use autotune to a knife-grinder who loves knives a little " + 
    "bit too much. Every character has "+ '<a class="important">5 different stats</a>' + ": " + '<a class="important">power</a>' + ", being the strength of the ball throw, " + 
    '<a class="important">speed</a>' + ", being how fast the character moves, " + '<a class="important">grab</a>' + ", pointing the distance  " + 
    "the character can grab the ball, " + '<a class="important">dash</a>' + ", being the distance the character can slide and, last but " + 
    "not least, the " + '<a class="important">stamina</a>' + ", which is a little bit different from the rest." + "<br>" + "<br>" +  
    "The " + '<a class="important">stamina</a>' + " is the endurance " + 
    "the characters have and is the only stat visible during a match, in the form of a slide bar. When a " + 
    "character makes a dodge or a throw, this slide bar is reduced and, the more tired the player is, " + 
    "the lesser the strength of the throw is. Furthermore, if you have a " + '<a class="important">low stamina</a>' + " bar, it is very " + 
    "likely that your character " + '<a class="important">won&apos;t be able to make a dodge</a>' + ", because these actions cost a lot of stamina. " + 
    "Lastly, the only way you can " + '<a class="important">recover stamina</a>' + " is " + '<a class="important">standing still</a>' + ", if you move, you won't lose stamina, " + 
    "but you won't recover it neither."
    
    img = document.getElementById('img2');
    img.setAttribute('src', 'img/DMCharacterSelection.png');
    img.setAttribute('alt', 'DMCharacterSelection');
    
    img = document.getElementById('img3');
    img.setAttribute('src', 'img/DMJungle.png');
    img.setAttribute('alt', 'DMJungle');
    
    p = document.getElementById('p3');
    p.innerHTML = "Apart from the characters, you can choose among " + '<a class="important">1 vs 1, 2 vs 2,</a>' + " and " + 
    '<a class="important">3 vs 3</a>' + " modalities and the game " + 
    "presents " + '<a class="important">3 different maps: the stadium, the moon and the jugnle</a>' + ", each one having different " + 
    "ambient sound effects." + "<br>" + "<br>" + 
    "Lastly, let's take a look to the most important mechanics the game has. As I mentioned earlier, " + 
    "every character has a " + '<a class="important">super throw</a>' + " and, in order to perform it, you have to " + '<a class="important">charge it</a>' + ", represented " + 
    "in the form of a slider in the UI. There are only two ways you can charge this, " + '<a class="important">catching a ball</a>' + " " + 
    "mid-air, or getting a " + '<a class="important">poer-up</a>' + ". The first one is the most risky way and gives you a third of " + 
    "the charge, but it's always usable, whereas the other one is completely random because you " + 
    "don't know when this power-ups are going to appear and provide a random bonus, not necessarily " + 
    "the super throw charge." + "<br>" + "<br>" + 
    "Speaking of the " + '<a class="important">power-ups</a>' + ", there are 4 different bonuses, " + '<a class="important">super strength, super speed, infinite stamina</a>' + 
    " and the aforementioned " + '<a class="important">super throw charge</a>' + ". They are pretty straightforward, " + 
    "giving you 2 throws with augmented strength and 5 seconds of extra speed and unlimited " + 
    "stamina."

    let div = document.getElementById('butts');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'aCont');
    div.appendChild(div2);
    let a = document.createElement('a');
    a.innerHTML = 'Download\xa0\it!';
    a.setAttribute('href', 'https://eps.ua.es/es/ingenieria-multimedia/videojuegos/juegos19-20.html');
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'download');
    div2.appendChild(a);
}

function dwi(){
    let article = document.getElementById('art');
    article.setAttribute('class', 'DWI');
    article.setAttribute('id', 'DWIc');
    
    let h1 = document.getElementById('tit');
    h1.innerHTML = "Deal With It!";
    
    let img = document.getElementById('img1');
    img.setAttribute('src', 'img/DWI.png');
    img.setAttribute('alt', 'DWI');
    
    let p = document.getElementById('p1');
    p.innerHTML = "The objective of " + '<a class="important">Deal With It!</a>' + " is to collect the " + '<a class="important">three deals</a>' + " that are scattered " + 
    "around the store. You better be quick, or you'll lose the deals, watch out for the " + 
    "" + '<a class="important">wet floor</a>' + " and be careful with the " + '<a class="important">angry customers</a>' + "." + "<br>" + "<br>" + 
    "This is a project made by " + '<a class="important">Malaka Studio</a>' + ", as part of the " + '<a class="important">GMTK GameJam 2020</a>' + ", " + 
    "developed in " + '<a class="important">Unity</a>' + " and published in " + '<a class="important">Itch Io</a>' + ". I worked as " + 
    '<a class="important">gameplay programmer</a>' + ", making the player's " + 
    "movement and interactions with the enviroment, the wet floor and the simple behavior of the other customers among others."
    
    p = document.getElementById('p2');
    p.innerHTML = "As I said, the main objective is to collect all " + '<a class="important">3 deals</a>' + " that are randomly generated in the store, " + 
    "but it is about to close, so you have " + '<a class="important">1 minute</a>' + "e to collect them all. The lesser the time, " + 
    "the faster your character will go, making it more challenging. To make it more difficult, " + 
    "because of all the mess going on at the store, there is some " + '<a class="important">tomato sauce</a>' + " spilled on the " + 
    "floor, so in some areas the floor is wet, and it'll make you and your cart slip, making " + 
    "you " + '<a class="important">go faster</a>' + " in a short period of time." + "<br>" + "<br>" + 
    "In addition, when we were designing the game mechanics, we tried to replicate, sort of, how " + 
    "complicated handling a shopping cart could be, so we decided to " + '<a class="important">difficult the turns</a>' + ", so, in order " + 
    "to make it, you will have to hold one of the turning keys one second."
    
    img = document.getElementById('img2');
    img.setAttribute('src', 'img/DWIWetFloor.png');
    img.setAttribute('alt', 'DWIWetFloor');
    
    img = document.getElementById('img3');
    img.setAttribute('src', 'img/DWICans.png');
    img.setAttribute('alt', 'DWICans');
    
    p = document.getElementById('p3');
    p.innerHTML = "There are some other important mechanics, like the " + '<a class="important">scoring</a>' + ". Collecting one deal will grant you " + 
    "some score, and it'll be dependent on " + '<a class="important">how much time did you spend</a>' + " collecting the deals. If " + 
    "you are fast, you will gain more points than if you are not so fast. The score also helps " + 
    "with the replayability, you can challenge yourself to see how fast can you collect them all." + 
    "<br>" + "<br>" + 
    "The other two important mechanics are the " + '<a class="important">movement</a>' + " and " + '<a class="important">collisions</a>' + ". The character is so " + 
    "excited about the deals that he can't stop. He " + '<a class="important">always will move forward</a>' + ", no matter what " + 
    "is in front of him. This, combined with the fact that if the chart " + '<a class="important">crash</a>' + " with something " + 
    "other than a deal or a can it's " + '<a class="important">game over</a>' + ", make the experience more challenging. Do not " + 
    "underestimate the threat of the " + '<a class="important">cans</a>' + ", they can't make you lose directly, but they can " + 
    "rotate the shopping cart a little, making more difficult to turn. Besides, watch out with " + 
    "the other " + '<a class="important">customers</a>' + ", they are as mad as you and the won't stop running arround the store."

    let div = document.getElementById('butts');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'aCont');
    div.appendChild(div2);
    let a = document.createElement('a');
    a.innerHTML = 'Play\xa0\it!';
    a.setAttribute('href', 'https://theko103.itch.io/deal-with-it');
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'download');
    div2.appendChild(a);
}

function ovsm(){
    let article = document.getElementById('art');
    article.setAttribute('class', 'OVSM');
    article.setAttribute('id', 'OVSMc');
    
    let h1 = document.getElementById('tit');
    h1.innerHTML = "Ōdo VS Murasakino";
    
    let img = document.getElementById('img1');
    img.setAttribute('src', 'img/OVSM.png');
    img.setAttribute('alt', 'OVSM');
    
    let p = document.getElementById('p1');
    p.innerHTML = "In " + '<a class="important">Ōdo vs Murasakino</a>' + " you are " + '<a class="important">Murasakino</a>' + 
    ", the purple ninja, and you arch enemy " + '<a class="important">Ōdo</a>' + ", the ocher " + 
    "ninja, has challenged you to a " + '<a class="important">death duel</a>' + " because he doesn't like you, so fight for your " + 
    "honor and defeat " + '<a class="important">Ōdo</a>' + " to demonstrate which ninja color is cooler." + "<br>" + "<br>" + 
    "This game was made by " + '<a class="important">Malak Studio</a>' + ", as part of the " + '<a class="important">Spain Game Devs Jam II</a>' +  
    "developed in " + '<a class="important">Unity</a>' + " and published in " + '<a class="important">Itch Io</a>' + ". I worked as " + 
    + '<a class="important">gameplay programmer</a>' + " and " + '<a class="important">AI programmer</a>' + ", " + 
    "making the player's controls, the life system and all AI behavior, among others."
    
    p = document.getElementById('p2');
    p.innerHTML = "Being a katana duel game, the mechanics of this are more focused on " + '<a class="important">combat</a>' + ". During the " + 
    "battle, both health bars, yours and the enemy's, are visible. Both ninjas can take " + '<a class="important">seven hits</a>' + 
    " before they bite the dust, but, there are some ways to prevent the opponent's hits. " + 
    "The most important ways are " + '<a class="important">blocking</a>' + " and " + '<a class="important">rolling</a>' + ". " + 
    '<a class="important">Blocking</a>' + " an attack will " + '<a class="important">nullify</a>' + " all " + 
    "the incoming " + '<a class="important">damage</a>' + ", though you need some precision because the action lasts only a brief " + 
    "time. " + '<a class="important">Rolling</a>' + " is better if you want to be more cautious, giving you a bit of " + '<a class="important">space</a>' + " before " + 
    "" + '<a class="important">Ōdo</a>' + " catches you again. The last option is  " + '<a class="important">running</a>' + " like a coward, gaining some space, but you " + 
    "aren't a coward, aren't you?"
    
    img = document.getElementById('img2');
    img.setAttribute('src', 'img/OVSMBlock.png');
    img.setAttribute('alt', 'OVSMBlock');
    
    img = document.getElementById('img3');
    img.setAttribute('src', 'img/OVSM3.png');
    img.setAttribute('alt', 'OVSM3');
    
    p = document.getElementById('p3');
    p.innerHTML = "" + '<a class="important">Ōdo</a>' + " is a very " + '<a class="important">aggressive</a>' + 
    " opponent, most of the time he will be " + '<a class="important">attacking</a>' + " you with no " + 
    "mercy and " + '<a class="important">pursuing</a>' + " you relentlessly. The best way to beat him is to play " + '<a class="important">defensive</a>' + ". If " + 
    "you manage to block his attacks, you will have an opportunity to counterattack, " + 
    "probably damaging him. Although he is aggressive, he won't stay still while you " + 
    "strike him, " + '<a class="important">Ōdo</a>' + " will do some " + '<a class="important">rolls</a>' + " and will " + '<a class="important">block</a>' + 
    " your offensive, letting you vulnerable to an attack."

    let div = document.getElementById('butts');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'aCont');
    div.appendChild(div2);
    let a = document.createElement('a');
    a.innerHTML = 'Play\xa0\it!';
    a.setAttribute('href', 'https://theko103.itch.io/odovsmurasakino');
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'download');
    div2.appendChild(a);
}

function ufod(){
    let article = document.getElementById('art');
    article.setAttribute('class', 'UFOD');
    article.setAttribute('id', 'UFODc');
    
    let h1 = document.getElementById('tit');
    h1.innerHTML = "U.F.O Driver";
    
    let img = document.getElementById('img1');
    img.setAttribute('src', 'img/UFODTutorial.png');
    img.setAttribute('alt', 'UFODTutorial');
    
    let p = document.getElementById('p1');
    p.innerHTML = "In " + '<a class="important">U.F.O Driver</a>' + ", as the title says, you are a spaceship driver, and your objective " + 
    "is to return the " + '<a class="important">U.F.Os</a>' + " to their " + '<a class="important">home planet</a>' + ", but, this might not be an easy task. " + 
    "<br>" + "<br>" + 
    "This project was made by a group of three students, called " + '<a class="important">Hidden</a>' + ", as part of the " + 
    '<a class="important">CPC Retro Dev 2019</a>' + " contest, developed in " + '<a class="important">assembly</a>' + 
    " and made for the " + '<a class="important">Amstrad CPC</a>' + " platform. I worked as " + 
    '<a class="important">system, gamplay</a>' + " and " + '<a class="important">AI programmer</a>' + ", developing the payer movement, the obstacles " + 
    "and enemies behaviour and all the systems that makes the game possible."
    
    p = document.getElementById('p2');
    p.innerHTML = '<a class="important">U.F.O Driver</a>' + " belongs to the " + '<a class="important">puzzle</a>' + 
    " genre and your objective is to hop in the " + '<a class="important">spaceships</a>' + " you " + 
    "encounter and take them to the " + '<a class="important">matching planet</a>' + ", the one that has the same color as the U.F.O " + 
    "in order to progress through the levels." + "<br>" + "<br>" + 
    "Do not think the space is empty, because you will " + 
    "encounter multiple " + '<a class="important">obstacles</a>' + " like " + '<a class="important">asteroids</a>' + " and " + 
    '<a class="important">labyrinths</a>' + " (yeah, apparently they are a " + 
    "thing in space). If you crash into an " + '<a class="important">asteroid, you&apos;ll die</a>' + ", restart that level and lose " + 
    "one of your three precious lives. Don't lose those lives or the game will restart and you'll " + 
    "be back to the first level. Don't worry about the walls of the " + '<a class="important">labyrinths</a>' + ", those are " + '<a class="important">not</a>' + 
    "as " + '<a class="important">deadly</a>' + " as the asteroids, they just won't let you pass through them."
    
    img = document.getElementById('img2');
    img.setAttribute('src', 'img/UFODBlueUFO.png');
    img.setAttribute('alt', 'UFODBlueUFO');
    
    img = document.getElementById('img3');
    img.setAttribute('src', 'img/UFODEnemy2.png');
    img.setAttribute('alt', 'UFODEnemy2');
    
    p = document.getElementById('p3');
    p.innerHTML = "The mechanics of this game are rather simple, the astronaut only can " + '<a class="important">move</a>' + 
    " in  " + '<a class="important">cardinal directions</a>' + " and jump in or out of a U.F.O, although the controls are quite strange, " + 
    "not the typical WASD movement, because they are based on the controls used normally on the " + 
    "Amstrad CPC system, making the experience more challenging if you are not familiar with them." + 
    "<br>" + "<br>" + 
    "There is a progression through the levels, the more you progress the more " + '<a class="important">difficult</a>' + " it gets. " + 
    "The only exceptions are when some new element is introduced, such as two U.F.Os in the same " + 
    "level or when introducing the " + '<a class="important">pursuing alines</a>' + ". Speaking of which, those enemies appear in " + 
    "the later levels and they will be quite peaceful at the beginning, but, if you hop in " + 
    "the U.F.O of the same color as it, the " + '<a class="important">persecution</a>' + " will begin until you deliver the " + 
    "spaceship to the corresponding planet or if you jump out of the ship. Be careful with " + 
    "this, once you deliver one ship or hop out of one, if you hop in the other color " + 
    "spaceship, the enemies with that correspond with the first U.F.O's color will also " + 
    "pursue you."

    let div = document.getElementById('butts');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'aCont');
    div.appendChild(div2);
    let a = document.createElement('a');
    a.innerHTML = 'Download\xa0\it!';
    a.setAttribute('href', 'games/UFODriver_Hidden.zip');
    a.setAttribute('dowload', '');
    a.setAttribute('class', 'download');
    div2.appendChild(a);
}

function projects(){
    document.getElementById('projects').style.display = "flex";
    document.getElementById('content').removeChild(document.getElementById('content').firstElementChild);
    document.getElementById('content').style.display = "none";
}

function openContent(){
    let div = document.getElementById('contact');
    let style = window.getComputedStyle(div);

    if(style.display == "none"){
        div.style.display = "block";
    }
}

document.getElementById('contact').addEventListener('click', function(e){
    let div = document.getElementById('contact');
    let span = document.getElementById('close');
    if(e.target == div || e.target == span){
        div.style.display = "none";
    }
});

function loadSlider(){
    let img = document.getElementsByClassName('currentImg');
    images.push(img[0]);

    img = document.getElementsByClassName('hiddenImg');
    for(var i = 0; i < img.length; i++){
        images.push(img[i]);
    }

    time = setInterval(changeImg, 4000, 'r ', false);
}

function changeImg(i, b){
    let img = images[actualPos];
    if(i == 'l'){
        if(actualPos == 0){
            actualPos = images.length - 1;
        }
        else{
            actualPos--;
        }
    }
    else{
        if(actualPos == images.length - 1){
            actualPos = 0;
        }
        else{
            actualPos++;
        }
    }

    img.className = "hiddenImg";
    images[actualPos].className = "currentImg fade";

    if(b){
        clearInterval(time);
        time = setInterval(changeImg, 4000, 'r ', false);
    }
}