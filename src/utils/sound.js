let _ctx=null,_gain=null,_oscs=[],_playing=false;
function getAC(){if(!_ctx){_ctx=new(window.AudioContext||window.webkitAudioContext)();_gain=_ctx.createGain();_gain.gain.value=0;_gain.connect(_ctx.destination);}return _ctx;}

export function startAmbient(){
  if(_playing)return;
  try{
    const ac=getAC();if(ac.state==='suspended')ac.resume();
    [[32,0,.08],[64,3,.05],[96,-2,.03],[128,7,.02],[192,0,.01],[256,5,.008]].forEach(([f,d,v])=>{
      const osc=ac.createOscillator(),g=ac.createGain(),lfo=ac.createOscillator(),lg=ac.createGain();
      lfo.frequency.value=0.08+Math.random()*.05;lg.gain.value=v*.3;
      lfo.connect(lg);lg.connect(g.gain);lfo.start();
      osc.type='sine';osc.frequency.value=f;osc.detune.value=d;g.gain.value=v;
      osc.connect(g);g.connect(_gain);osc.start();_oscs.push(osc,lfo);
    });
    _gain.gain.cancelScheduledValues(ac.currentTime);
    _gain.gain.setValueAtTime(0,ac.currentTime);
    _gain.gain.linearRampToValueAtTime(1,ac.currentTime+5);
    _playing=true;
  }catch(e){}
}

export function stopAmbient(){
  if(!_ctx||!_gain)return;
  _gain.gain.linearRampToValueAtTime(0,_ctx.currentTime+2);
  setTimeout(()=>{_oscs.forEach(o=>{try{o.stop();}catch(e){}});_oscs=[];_playing=false;},2100);
}

export function isAmbientPlaying(){return _playing;}

export function playClick(type='soft'){
  try{
    const ac=getAC();if(ac.state==='suspended')ac.resume();
    if(type==='soft'){
      const o=ac.createOscillator(),g=ac.createGain();
      o.type='sine';o.frequency.setValueAtTime(800,ac.currentTime);o.frequency.exponentialRampToValueAtTime(400,ac.currentTime+.12);
      g.gain.setValueAtTime(.15,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.12);
      o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.13);
    }else if(type==='open'){
      [600,900,1200].forEach((f,i)=>{
        const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;
        g.gain.setValueAtTime(0,ac.currentTime+i*.06);g.gain.linearRampToValueAtTime(.1,ac.currentTime+i*.06+.04);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+i*.06+.2);
        o.connect(g);g.connect(ac.destination);o.start(ac.currentTime+i*.06);o.stop(ac.currentTime+i*.06+.25);
      });
    }else if(type==='close'){
      const o=ac.createOscillator(),g=ac.createGain();o.type='sine';
      o.frequency.setValueAtTime(500,ac.currentTime);o.frequency.exponentialRampToValueAtTime(200,ac.currentTime+.15);
      g.gain.setValueAtTime(.1,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.15);
      o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.16);
    }else if(type==='nav'){
      const o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=1200;
      g.gain.setValueAtTime(.08,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+.08);
      o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.09);
    }
  }catch(e){}
}
