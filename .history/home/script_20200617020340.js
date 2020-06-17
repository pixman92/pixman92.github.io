var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var boolLoopOn = 'true';

window.onload = ()=>{
  var alphabet =   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  

    if(localStorage.getItem('savedText')){
        document.getElementById('toBeParsed').value = localStorage.getItem('savedText')
    }

    var cont='false'; boolLoopOn = 'true';
    document.getElementById('parseMe').addEventListener('click', ()=>{
        localStoreText();
        
      
      //adds Stopping functionality!!!
        if(cont=='false'){
          cont = 'true';
          splitMe(document.getElementById('toBeParsed').value);
        }else{
          cont = 'false';
          splitMe("");
        }
  });

  
  document.getElementById('random').addEventListener('click', ()=>{
    random();
  });

  document.getElementById("streamLearning").addEventListener('click', async()=>{
    randomForLearning();
    for(var i=0; i<randomsLettersArray.length; i++){
      await wait(750).then(()=>{});                                                           //critical to keeping the timing right!
      playMeNow(randomsLettersArray[i]);
      
      if(i==randomsLettersArray.length-1){
        document.getElementById("streamLearning").disabled = false;
      }else{
        document.getElementById("streamLearning").disabled = true;
      }
    }
  });
  
  //================================
  // while looping code
  
  
  makeLoop();
    
  var arrayOfSounds = [];
  
//   var soundPath = './Sounds/Sound-Effects/shortSounds/';
//   var arrayOfSounds = ["AirGunDrill_S08IN.25.wav", "ArrowImpactHuman_S08WA.4.4", "BloodGutsSpill_S08HO.3", "BulletFlyBy_S08WA.18.wav", "BulletFlyBy_S08WA.22.wav", "CatMeow_S08AN.44.wav", "DropSingleDrip_S08WR.47.wav", "DropSingleDrip_S08WR.49.wav", "FireballBurst_S08FI.28.wav", "FleshStab_S08HO.100.wav", "GolfClubSwing_S08SP.410.wav", "HumanGrunt_S08HU.271.wav", "HumanGrunt_S08HU.286.wav", "HumanKiss_S08HU.312.wav", "HumanSigh_S08HU.455.wav", "HumanSlurp_S08HU.465.wav", "ImpactGlass_S08IM.303.wav", "ImpactHumanBody_S08IM.327.wav", "ImpactHumanHit_S08IM.330.wav", "ImpactHumanSmack_S08IM.336.wav", "PinballBumper_S08SP.564.wav", "PinballBumper_S08SP.566.wav", "PREL_HIT WARBLE_PO01.238.wav", "SciFiLaser_S08SF.357.wav", "SciFiWhoosh_S08SF.1684.wav", "SemiTruckHorn_S08IN.866.wav"];


}

autoUnlock = true;


function playMeNow(letter){
    var arrayOfSounds = ["https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FAirGunDrill_S08IN.25.wav?v=1588189918314", 
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FArrowImpactHuman_S08WA.4.4.wav?v=1588189918658", 
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FBulletFlyBy_S08WA.18.wav?v=1588189918681",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FBloodGutsSpill_S08HO.3.wav?v=1588189918846",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FBulletFlyBy_S08WA.22.wav?v=1588189918982",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FCatMeow_S08AN.44.wav?v=1588189919200",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FFireballBurst_S08FI.28.wav?v=1588189919471",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FFleshStab_S08HO.100.wav?v=1588189919677",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FGolfClubSwing_S08SP.410.wav?v=1588189919992",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FHumanGrunt_S08HU.271.wav?v=1588189920147",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FHumanGrunt_S08HU.286.wav?v=1588189920368",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FHumanKiss_S08HU.312.wav?v=1588189920685",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FHumanSigh_S08HU.455.wav?v=1588189921249",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FHumanSlurp_S08HU.465.wav?v=1588189921322",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FImpactGlass_S08IM.303.wav?v=1588189921874",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FImpactHumanBody_S08IM.327.wav?v=1588189922138",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FImpactHumanHit_S08IM.330.wav?v=1588189922325",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FImpactHumanSmack_S08IM.336.wav?v=1588189922687",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FPinballBumper_S08SP.564.wav?v=1588189922894",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FPinballBumper_S08SP.566.wav?v=1588189923163",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FSciFiLaser_S08SF.357.wav?v=1588189923443",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FSciFiWhoosh_S08SF.1684.wav?v=1588189923607",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FSemiTruckHorn_S08IN.866.wav?v=1588189924102",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FDropSingleDrip_S08WR.47.wav?v=1588189924124",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FDropSingleDrip_S08WR.49.wav?v=1588189924328",
                         "https://cdn.glitch.com/7c147557-1773-4862-b642-eaf2143770a1%2FPREL_HIT%20WARBLE_PO01.238.wav?v=1588189924687",
                        ];
              
                         
                         
    var soundPath = '';

    if(letter=='a'){
        var soundA = new Howl({
            src: [soundPath + arrayOfSounds[0]]
        });
    
        var idA = soundA.play();
    }

    if(letter=='b'){
        var soundB = new Howl({
            src: [soundPath + arrayOfSounds[1]]
        });
        var idB = soundB.play();

    }

    if(letter=='c'){
        var soundC = new Howl({
            src: [soundPath + arrayOfSounds[2]]
        });
        var idC = soundC.play();

    }
    if(letter=='d'){
        var soundD = new Howl({
            src: [soundPath + arrayOfSounds[3]]
        });
        var idD = soundD.play();

    }
    if(letter=='e'){
        var soundE = new Howl({
            src: [soundPath + arrayOfSounds[4]]
        });
        var idE = soundE.play();

    }
    if(letter=='f'){
        var soundF = new Howl({
            src: [soundPath + arrayOfSounds[5]]
        });
        var idF = soundF.play();

    }
    if(letter=='g'){
        var soundG = new Howl({
            src: [soundPath + arrayOfSounds[6]]
        });
        var idG = soundG.play();

    }
    if(letter=='h'){
        var soundH = new Howl({
            src: [soundPath + arrayOfSounds[7]]
        });
        var idH = soundH.play();

    }
    if(letter=='i'){
        var soundI = new Howl({
            src: [soundPath + arrayOfSounds[8]]
        });
        var idI = soundI.play();

    }
    if(letter=='j'){
        var soundJ = new Howl({
            src: [soundPath + arrayOfSounds[9]]
        });
        var idJ = soundJ.play();

    }
    if(letter=='k'){
        var soundK = new Howl({
            src: [soundPath + arrayOfSounds[10]]
        });
        var idK = soundK.play();

    }
    if(letter=='l'){
        var soundL = new Howl({
            src: [soundPath + arrayOfSounds[11]]
        });
        var idL = soundL.play();

    }
    if(letter=='m'){
        var soundM = new Howl({
            src: [soundPath + arrayOfSounds[12]]
        });
        var idM = soundM.play();

    }
    if(letter=='n'){
        var soundN = new Howl({
            src: [soundPath + arrayOfSounds[13]]
        });
        var idN = soundN.play();

    }
    if(letter=='o'){
        var soundO = new Howl({
            src: [soundPath + arrayOfSounds[14]]
        });
        var idO = soundO.play();

    }
    if(letter=='p'){
        var soundP = new Howl({
            src: [soundPath + arrayOfSounds[15]]
        });
        var idP = soundP.play();

    }
    if(letter=='q'){
        var soundQ = new Howl({
            src: [soundPath + arrayOfSounds[16]]
        });
        var idQ = soundQ.play();

    }
    if(letter=='r'){
        var soundR = new Howl({
            src: [soundPath + arrayOfSounds[17]]
        });
        var idR = soundR.play();

    }
    if(letter=='s'){
        var soundS = new Howl({
            src: [soundPath + arrayOfSounds[18]]
        });
        var idS = soundS.play();

    }
    if(letter=='t'){
        var soundT = new Howl({
            src: [soundPath + arrayOfSounds[19]]
        });
        var idT = soundT.play();

    }
    if(letter=='u'){
        var soundU = new Howl({
            src: [soundPath + arrayOfSounds[20]]
        });
        var idU = soundU.play();

    }
    if(letter=='v'){
        var soundV = new Howl({
            src: [soundPath + arrayOfSounds[21]]
        });
        var idV = soundV.play();

    }
    if(letter=='w'){
        var soundW = new Howl({
            src: [soundPath + arrayOfSounds[22]]
        });
        var idW = soundW.play();

    }
    if(letter=='x'){
        var soundX = new Howl({
            src: [soundPath + arrayOfSounds[23]]
        });
        var idX = soundX.play();

    }
    if(letter=='y'){
        var soundY = new Howl({
            src: [soundPath + arrayOfSounds[24]]
        });
        var idY = soundY.play();

    }
    if(letter=='z'){
        var soundZ = new Howl({
            src: [soundPath + arrayOfSounds[25]]
        });
        var idZ = soundZ.play();

    }


}

//========================================
var splitStr=[]; var i = 0;
async function  splitMe(stringMe, keepGoing) {
    stringMe = stringMe.toLowerCase();
    splitStr = stringMe.split("");

    console.log('splitStr', splitStr);
    for(var i=0; i<splitStr.length; i++){
        await wait(750).then(()=>{});
        playMeNow(splitStr[i]);
      
        console.log('i', i);
        
        if(i==splitStr.length-1 && boolLoopOn == 'true'){ 
          console.log('i reached');
          splitMe(document.getElementById('toBeParsed').value);
        }
        if(boolLoopOn=='false'){
          splitMe("");
        }
        
    }
    console.log('done');
  
    // if(boolLoopOn=='true'){
    //   i=0;
    //   splitMe(document.getElementById('toBeParsed').value, 'true');
    // }else{
    //   splitMe("", 'false');
    // }
  // alert('done');
  

  
}

function localStoreText(){
    localStorage.setItem("savedText", document.getElementById('toBeParsed').value);
}


//=====================================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}


//======================================================

var randomsArray =["town","butter","explain","region","double","labor","careful","bell","disease","given","opportunity","nature","friend","ought","camera","local","lonely","fresh","gray","gas","stop","race","sky","forty","current","zebra","pig","month","previous","throat","directly","instead","met","first","cell","job","fear","farm","built","jack","corner","colony","moon","back","search","usual","early","equipment","sell","myself","ought","taken","brush","scared","wrote","helpful","rays","any","deal","anywhere","account","exercise","glad","farm","pick","table","trunk","won","spider","silk","tried","lose","classroom","late","tin","fastened","remove","courage","faster","wore","wood","inside","graph","finest","dish","dark","was","father","swept","beauty","listen","join","advice","donkey","large","remember","shall","slight","numeral","angry","copper","dirty","race","musical","greatly","moving","massage","improve","string","rhythm","clothing","corn","guide","between","made","shot","present","bean","sides","my","importance","receive","massage","pan","bat","snake","crop","castle","fresh","act","satisfied","soil","still","war","young","real","neck","tobacco","back","bet","visit","doing","seen","public","appropriate","than","whom","storm","negative","typical","beneath","distant","thee","swimming","board","southern","he","got","type","obtain","mathematics","clearly","lungs","hit","touch","ability","nearest","tape","happen","figure","modern","driver","farmer","torn","slightly","dot","valley","stairs","operation","face","research","many","dry","mix","they","account","beyond","bear","sister","label","bad","who","doll","whom","dried","machinery","ate","huge","ten","share","recognize","substance","nice","shore","track","measure","previous","rear","unhappy","solution","bicycle","stream","job","price","look","stronger","addition","finger","speech","ocean","grandfather","mill","feel","eager","method","brass","neighbor","forward","quickly","bill","wait","due","bare","very","guide","pan","dozen","missing","fish","night","explanation","complex","opposite","weight","milk","policeman","tune","driven","mysterious","mail","slowly","wheel","bit","any","quite","moon","specific","ground","kitchen","stronger","team","standard","away","sold","clean","after","difference","forest","property","scientific","bridge","consonant","satisfied","glad","soft","vote","lady","period","situation","market","maybe","industrial","establish","escape","fat","meal","parent","sheet","heading","community","factory","mine","differ","people","dog","colony","cook","valuable","gas","related","twelve","six","development","drive","balance","pet","character","smallest","frozen","silence","support","stock","yet","sold","with","beginning","stuck","seen","worth","with","dig","ancient","piece","those","early","needle","kept","tropical","softly","electricity","eager","card","tribe","anyway","sink","heard","center","deer","clearly","anything","under","easier","hungry","truck","cloth","accurate","grandfather","mysterious","pull","complex","rather","warm","roof","driving","shadow","pupil","official","favorite","stream","location","metal","main","wood","difference","own","seems","highest","off","complete","stone","notice","sugar","attack","sheet","just","television","your","layers","name","bridge","quickly","jack","obtain","hollow","done","worker","cast","conversation","ground","discuss","daughter","shallow","laugh","figure","fellow","control","begun","separate","steep","musical","short","examine","manner","had","hour","pen","make","negative","open","football","income","doubt","strong","thumb","influence","struck","frozen","condition","stopped","visitor","yet","direct","night","itself","me","lift","again","rear","known","theory","generally","brass","halfway","remove","weather","labor","row","plural","spin","street","sit","universe","frequently","task","particularly","task","having","silver","breeze","value","ran","twice","she","nearer","various","officer","vegetable","took","treated","must","quietly","poet","pair","better","nearby","depend","send","throw","molecular","win","joined","cloud","wall","knew","won","road","view","poet","blanket","drive","worried","if","seven","satisfied","home","ever","religious","consider","equally","roll","page","function","stretch","fresh","birds","nearer","spend","notice","studied","better"];
function random(){
  var randomIndex = Math.floor((Math.random() * 500) + 1);
  var randomWord = randomsArray[randomIndex];
  
  // alert(randomWord);
 document.getElementById('toBeParsed').value = randomWord;
  
  localStoreText();

}


//=====================================================
var randomArrayLength = 0;
var randomsLettersArray = [];
function randomForLearning(){
  //funciton that makes 5-10 digits
  //then takes that many random Letters
  //then puts in a single array - to be sounded out
  
  randomsLettersArray = [];
  
  
  var randomArrayLength = Math.floor((Math.random() * 8) + 4);
  console.log("num", randomArrayLength);
  for(var i=0; i<randomArrayLength; i++){
    var randomLetter = Math.floor((Math.random() * 25) + 0);
    randomsLettersArray.push(alphabet[randomLetter]);
  }
  console.log("randomsLetters", randomsLettersArray);
}