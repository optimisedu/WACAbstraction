export const audioCtx = new Window.AudioContext();

export let oscArr = [];
export let lfoArr = [];  
 
export class OscilatorNode {
    constructor(audioCtx, oscArr, osc, type, frequency, detune){
        this.audioCtx = audioCtx;
        this.oscArr = oscArr;
        this.osc = osc;
        this.frequency = frequency;
        this.detune = detune;
        this.type = type;
    }
    newOsc(frequency, detune, type){
        this.osc = this.audioCtx.createOscillator();
        this.osc.type = type;
        this.osc.frequency.value = frequency;
        this.osc.detune.value = detune;
        this.oscArr.push(this.osc);
        return this.oscArr
    }
    subOsc(){
        this.osc = this.audioCtx.createOscillator();
        this.osc.type = sine;
        this.osc.frequency.value = 30;
        this.osc.detune.value = 0;
        this.oscArr.push(this.osc, this.oscArr[-1]);
        return this.oscArr
    }

}


/*exanple use, real world needs connection and suspense guards for memory
const lfo = new OscilatorNode(audioCtx, lfoArr, osc, "sine", 4, 0);
for (lfo of lfoArr){
    lfoArr[lfo].start;
}*/
