function makeLoop(){
    var loop = new MountMe();

    loop.make('button', 'loop', '#loopDiv');
  
    document.getElementById('loopDiv').children[0].addEventListener('click', ()=>{
    
      if(boolLoopOn=='true'){
        boolLoopOn = 'false';
        console.log('loop off!');
        // alert("Loop OFF");
        document.getElementById('onOrOff').innerText = "Loop OFF";
      }else{
        boolLoopOn = 'true';
        splitMe(document.getElementById('toBeParsed').value);
        console.log('loop on!');
        // alert("Loop ON");
        document.getElementById('onOrOff').innerText = "Loop ON";
      }
    });
  
  

}