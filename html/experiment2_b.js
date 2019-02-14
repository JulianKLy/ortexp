/********************** 
 * Experiment2_B Test *
 **********************/

import { PsychoJS } from './lib/core-3.0.3.js';
import * as core from './lib/core-3.0.3.js';
import { TrialHandler } from './lib/data-3.0.3.js';
import { Scheduler } from './lib/util-3.0.3.js';
import * as util from './lib/util-3.0.3.js';
import * as visual from './lib/visual-3.0.3.js';
import { Sound } from './lib/sound-3.0.3.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'experiment2_b';  // from the Builder filename that created this script
let expInfo = {'gender': '', 'age': '', 'participant': '001', 'language': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instruction_IntroRoutineBegin);
flowScheduler.add(Instruction_IntroRoutineEachFrame);
flowScheduler.add(Instruction_IntroRoutineEnd);
flowScheduler.add(ISI_PreRoutineBegin);
flowScheduler.add(ISI_PreRoutineEachFrame);
flowScheduler.add(ISI_PreRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(Instruction_ProdRoutineBegin);
flowScheduler.add(Instruction_ProdRoutineEachFrame);
flowScheduler.add(Instruction_ProdRoutineEnd);
flowScheduler.add(ISI_PreRoutineBegin);
flowScheduler.add(ISI_PreRoutineEachFrame);
flowScheduler.add(ISI_PreRoutineEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(Instruction_FCRoutineBegin);
flowScheduler.add(Instruction_FCRoutineEachFrame);
flowScheduler.add(Instruction_FCRoutineEnd);
flowScheduler.add(ISI_PreRoutineBegin);
flowScheduler.add(ISI_PreRoutineEachFrame);
flowScheduler.add(ISI_PreRoutineEnd);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(Thank_youRoutineBegin);
flowScheduler.add(Thank_youRoutineEachFrame);
flowScheduler.add(Thank_youRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.3';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var Instruction_IntroClock;
var lub;
var condition;
var ISI_PreClock;
var fixation;
var ExposureClock;
var Sing_img;
var Pl_img;
var Sing_txt;
var Pl_txt;
var ISI_1secClock;
var Instruction_ProdClock;
var image_3;
var Test_ProdClock;
var Target_ins1;
var Trigger_img1;
var Target_img1;
var Trigger_txt1;
var txtinp;
var Instruction_FCClock;
var image_6;
var Test_FCClock;
var Target_ins2;
var Trigger_img2;
var Target_img2;
var Trigger_txt2;
var Target_instr_l;
var Target_instr_r;
var Resp_a;
var Resp_b;
var Thank_youClock;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instruction_Intro"
  Instruction_IntroClock = new util.Clock();
  lub = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lub', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  function random_character() {
      var chars = "AB";
      return chars.substr( Math.floor(Math.random() * 2), 1);
  }
  
  condition = random_character();
  // Initialize components for Routine "ISI_Pre"
  ISI_PreClock = new util.Clock();
  fixation = new visual.Rect ({
    win: psychoJS.window, name: 'fixation',
    units: psychoJS.window.units,
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  // Initialize components for Routine "Exposure"
  ExposureClock = new util.Clock();
  Sing_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Sing_img', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  Pl_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pl_img', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Sing_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Sing_txt',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -2.0 
  });
  
  Pl_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pl_txt',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ISI_1sec"
  ISI_1secClock = new util.Clock();
  // Initialize components for Routine "Instruction_Prod"
  Instruction_ProdClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "ISI_Pre"
  ISI_PreClock = new util.Clock();
  fixation = new visual.Rect ({
    win: psychoJS.window, name: 'fixation',
    units: psychoJS.window.units,
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  // Initialize components for Routine "Test_Prod"
  Test_ProdClock = new util.Clock();
  Target_ins1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Target_ins1',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, 0.85], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  Trigger_img1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trigger_img1', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Target_img1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Target_img1', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Trigger_txt1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Trigger_txt1',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -3.0 
  });
  
  
  txtinp = new visual.TextStim({
    win: psychoJS.window,
    name: 'txtinp',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ISI_1sec"
  ISI_1secClock = new util.Clock();
  // Initialize components for Routine "Instruction_FC"
  Instruction_FCClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "ISI_Pre"
  ISI_PreClock = new util.Clock();
  fixation = new visual.Rect ({
    win: psychoJS.window, name: 'fixation',
    units: psychoJS.window.units,
    width: [0.5, 0.5][0], height: [0.5, 0.5][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  // Initialize components for Routine "Test_FC"
  Test_FCClock = new util.Clock();
  Target_ins2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Target_ins2',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, 0.85], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  Trigger_img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Trigger_img2', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Target_img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Target_img2', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Trigger_txt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Trigger_txt2',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -3.0 
  });
  
  Target_instr_l = new visual.TextStim({
    win: psychoJS.window,
    name: 'Target_instr_l',
    text: 'Press a\n\n',
    font: 'Arial',
    units : 'norm',   pos: [(- 0.5), (- 0.9)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -4.0 
  });
  
  Target_instr_r = new visual.TextStim({
    win: psychoJS.window,
    name: 'Target_instr_r',
    text: 'Press k',
    font: 'Arial',
    units : 'norm',   pos: [0.5, (- 0.8)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -5.0 
  });
  
  Resp_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'Resp_a',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [(- 0.5), (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -7.0 
  });
  
  Resp_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'Resp_b',
    text: 'default text',
    font: 'Arial',
    units : 'norm',   pos: [0.5, (- 0.6)], height: 0.3,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "ISI_1sec"
  ISI_1secClock = new util.Clock();
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Thank you very much for participating!\n\nPress q to quit.',
    font: 'Arial',
    units : 'norm',   pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_resp_1;
var Instruction_IntroComponents;
function Instruction_IntroRoutineBegin() {
  //------Prepare to start Routine 'Instruction_Intro'-------
  t = 0;
  Instruction_IntroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_1 = new core.BuilderKeyResponse(psychoJS);
  lub.setImage((('Images/intro' + condition) + '.png'));
  
  // keep track of which components have finished
  Instruction_IntroComponents = [];
  Instruction_IntroComponents.push(key_resp_1);
  Instruction_IntroComponents.push(lub);
  
  for (const thisComponent of Instruction_IntroComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Instruction_IntroRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction_Intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instruction_IntroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *key_resp_1* updates
  if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_1.tStart = t;  // (not accounting for frame time here)
    key_resp_1.frameNStart = frameN;  // exact frame index
    key_resp_1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_1.rt = key_resp_1.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *lub* updates
  if (t >= 0.0 && lub.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    lub.tStart = t;  // (not accounting for frame time here)
    lub.frameNStart = frameN;  // exact frame index
    lub.setAutoDraw(true);
  }

  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Instruction_IntroComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instruction_IntroRoutineEnd() {
  //------Ending Routine 'Instruction_Intro'-------
  for (const thisComponent of Instruction_IntroComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(key_resp_1.keys) >= 0) {    // No response was made
      key_resp_1.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
  if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
      routineTimer.reset();
      }
  
  
  // the Routine "Instruction_Intro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var ISI_PreComponents;
function ISI_PreRoutineBegin() {
  //------Prepare to start Routine 'ISI_Pre'-------
  t = 0;
  ISI_PreClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISI_PreComponents = [];
  ISI_PreComponents.push(fixation);
  
  for (const thisComponent of ISI_PreComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function ISI_PreRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI_Pre'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISI_PreClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixation* updates
  if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation.tStart = t;  // (not accounting for frame time here)
    fixation.frameNStart = frameN;  // exact frame index
    fixation.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ISI_PreComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISI_PreRoutineEnd() {
  //------Ending Routine 'ISI_Pre'-------
  for (const thisComponent of ISI_PreComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, (('Lists/Order' + condition) + '.xlsx'), 'np.random.choice(43, size = 20, replace = False)'),
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(ExposureRoutineBegin);
    thisScheduler.add(ExposureRoutineEachFrame);
    thisScheduler.add(ExposureRoutineEnd);
    thisScheduler.add(ISI_1secRoutineBegin);
    thisScheduler.add(ISI_1secRoutineEachFrame);
    thisScheduler.add(ISI_1secRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, (('Lists/OrderProd' + condition) + '.xlsx'), 'np.random.choice(30, size = 10, replace = False)'),
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importConditions(trials_2));
    thisScheduler.add(Test_ProdRoutineBegin);
    thisScheduler.add(Test_ProdRoutineEachFrame);
    thisScheduler.add(Test_ProdRoutineEnd);
    thisScheduler.add(ISI_1secRoutineBegin);
    thisScheduler.add(ISI_1secRoutineEachFrame);
    thisScheduler.add(ISI_1secRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial_2));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

var trials_3;
function trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, (('Lists/OrderFC' + condition) + '.xlsx'), 'np.random.choice(30, size = 10, replace = False)'),
    seed: undefined, name: 'trials_3'});
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    thisScheduler.add(importConditions(trials_3));
    thisScheduler.add(Test_FCRoutineBegin);
    thisScheduler.add(Test_FCRoutineEachFrame);
    thisScheduler.add(Test_FCRoutineEnd);
    thisScheduler.add(ISI_1secRoutineBegin);
    thisScheduler.add(ISI_1secRoutineEachFrame);
    thisScheduler.add(ISI_1secRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial_3));
  }

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

var ExposureComponents;
function ExposureRoutineBegin() {
  //------Prepare to start Routine 'Exposure'-------
  t = 0;
  ExposureClock.reset(); // clock
  frameN = -1;
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  Sing_img.setImage(trig_img);
  Pl_img.setImage(targ_img);
  Sing_txt.setText(trig);
  Pl_txt.setText(targ);
  // keep track of which components have finished
  ExposureComponents = [];
  ExposureComponents.push(Sing_img);
  ExposureComponents.push(Pl_img);
  ExposureComponents.push(Sing_txt);
  ExposureComponents.push(Pl_txt);
  
  for (const thisComponent of ExposureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ExposureRoutineEachFrame() {
  //------Loop for each frame of Routine 'Exposure'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ExposureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Sing_img* updates
  if (t >= 0.0 && Sing_img.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Sing_img.tStart = t;  // (not accounting for frame time here)
    Sing_img.frameNStart = frameN;  // exact frame index
    Sing_img.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Sing_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Sing_img.setAutoDraw(false);
  }
  
  // *Pl_img* updates
  if (t >= 3 && Pl_img.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Pl_img.tStart = t;  // (not accounting for frame time here)
    Pl_img.frameNStart = frameN;  // exact frame index
    Pl_img.setAutoDraw(true);
  }

  frameRemains = 3 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Pl_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Pl_img.setAutoDraw(false);
  }
  
  // *Sing_txt* updates
  if (t >= 0.0 && Sing_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Sing_txt.tStart = t;  // (not accounting for frame time here)
    Sing_txt.frameNStart = frameN;  // exact frame index
    Sing_txt.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Sing_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Sing_txt.setAutoDraw(false);
  }
  
  // *Pl_txt* updates
  if (t >= 3 && Pl_txt.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Pl_txt.tStart = t;  // (not accounting for frame time here)
    Pl_txt.frameNStart = frameN;  // exact frame index
    Pl_txt.setAutoDraw(true);
  }

  frameRemains = 3 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Pl_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Pl_txt.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ExposureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ExposureRoutineEnd() {
  //------Ending Routine 'Exposure'-------
  for (const thisComponent of ExposureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var ISI_1secComponents;
function ISI_1secRoutineBegin() {
  //------Prepare to start Routine 'ISI_1sec'-------
  t = 0;
  ISI_1secClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.750000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISI_1secComponents = [];
  
  for (const thisComponent of ISI_1secComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function ISI_1secRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI_1sec'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISI_1secClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ISI_1secComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISI_1secRoutineEnd() {
  //------Ending Routine 'ISI_1sec'-------
  for (const thisComponent of ISI_1secComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var Instruction_ProdComponents;
function Instruction_ProdRoutineBegin() {
  //------Prepare to start Routine 'Instruction_Prod'-------
  t = 0;
  Instruction_ProdClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  image_3.setImage((('Images/instrProd' + condition) + '.png'));
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Instruction_ProdComponents = [];
  Instruction_ProdComponents.push(image_3);
  Instruction_ProdComponents.push(key_resp_2);
  
  for (const thisComponent of Instruction_ProdComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Instruction_ProdRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction_Prod'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instruction_ProdClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *image_3* updates
  if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_3.tStart = t;  // (not accounting for frame time here)
    image_3.frameNStart = frameN;  // exact frame index
    image_3.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Instruction_ProdComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instruction_ProdRoutineEnd() {
  //------Ending Routine 'Instruction_Prod'-------
  for (const thisComponent of Instruction_ProdComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(key_resp_2.keys) >= 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  // the Routine "Instruction_Prod" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var text_resp;
var Test_ProdComponents;
function Test_ProdRoutineBegin() {
  //------Prepare to start Routine 'Test_Prod'-------
  t = 0;
  Test_ProdClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Target_ins1.setText(instr);
  Trigger_img1.setImage(trig_img);
  Target_img1.setImage(targ_img);
  Trigger_txt1.setText(trig);
  
  text_resp = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Test_ProdComponents = [];
  Test_ProdComponents.push(Target_ins1);
  Test_ProdComponents.push(Trigger_img1);
  Test_ProdComponents.push(Target_img1);
  Test_ProdComponents.push(Trigger_txt1);
  Test_ProdComponents.push(txtinp);
  Test_ProdComponents.push(text_resp);
  
  for (const thisComponent of Test_ProdComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Test_ProdRoutineEachFrame() {
  //------Loop for each frame of Routine 'Test_Prod'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Test_ProdClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Target_ins1* updates
  if (t >= 5 && Target_ins1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_ins1.tStart = t;  // (not accounting for frame time here)
    Target_ins1.frameNStart = frameN;  // exact frame index
    Target_ins1.setAutoDraw(true);
  }

  
  // *Trigger_img1* updates
  if (t >= 0.0 && Trigger_img1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Trigger_img1.tStart = t;  // (not accounting for frame time here)
    Trigger_img1.frameNStart = frameN;  // exact frame index
    Trigger_img1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Trigger_img1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Trigger_img1.setAutoDraw(false);
  }
  
  // *Target_img1* updates
  if (t >= 5 && Target_img1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_img1.tStart = t;  // (not accounting for frame time here)
    Target_img1.frameNStart = frameN;  // exact frame index
    Target_img1.setAutoDraw(true);
  }

  
  // *Trigger_txt1* updates
  if (t >= 0.0 && Trigger_txt1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Trigger_txt1.tStart = t;  // (not accounting for frame time here)
    Trigger_txt1.frameNStart = frameN;  // exact frame index
    Trigger_txt1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Trigger_txt1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Trigger_txt1.setAutoDraw(false);
  }
  
  
  // *txtinp* updates
  if (t >= 5 && txtinp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    txtinp.tStart = t;  // (not accounting for frame time here)
    txtinp.frameNStart = frameN;  // exact frame index
    txtinp.setAutoDraw(true);
  }

  if (txtinp.status === PsychoJS.Status.STARTED){ // only update if being drawn
    txtinp.setText(inputText);
  }
  
  // *text_resp* updates
  if (t >= 5 && text_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_resp.tStart = t;  // (not accounting for frame time here)
    text_resp.frameNStart = frameN;  // exact frame index
    text_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { text_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (text_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      text_resp.keys = text_resp.keys.concat(theseKeys);  // storing all keys
      text_resp.rt = text_resp.rt.concat(text_resp.clock.getTime());
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Test_ProdComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Test_ProdRoutineEnd() {
  //------Ending Routine 'Test_Prod'-------
  for (const thisComponent of Test_ProdComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  
  // check responses
  if (['', [], undefined].indexOf(text_resp.keys) >= 0) {    // No response was made
      text_resp.keys = undefined;
  }
  
  psychoJS.experiment.addData('text_resp.keys', text_resp.keys);
  if (typeof text_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('text_resp.rt', text_resp.rt);
      }
  
  // the Routine "Test_Prod" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_4;
var Instruction_FCComponents;
function Instruction_FCRoutineBegin() {
  //------Prepare to start Routine 'Instruction_FC'-------
  t = 0;
  Instruction_FCClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  image_6.setImage((('Images/instrFC' + condition) + '.png'));
  key_resp_4 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Instruction_FCComponents = [];
  Instruction_FCComponents.push(image_6);
  Instruction_FCComponents.push(key_resp_4);
  
  for (const thisComponent of Instruction_FCComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Instruction_FCRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instruction_FC'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instruction_FCClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *image_6* updates
  if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_6.tStart = t;  // (not accounting for frame time here)
    image_6.frameNStart = frameN;  // exact frame index
    image_6.setAutoDraw(true);
  }

  
  // *key_resp_4* updates
  if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_4.tStart = t;  // (not accounting for frame time here)
    key_resp_4.frameNStart = frameN;  // exact frame index
    key_resp_4.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_4.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_4.rt = key_resp_4.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Instruction_FCComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instruction_FCRoutineEnd() {
  //------Ending Routine 'Instruction_FC'-------
  for (const thisComponent of Instruction_FCComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(key_resp_4.keys) >= 0) {    // No response was made
      key_resp_4.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
  if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
      }
  
  // the Routine "Instruction_FC" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var FC_resp;
var Test_FCComponents;
function Test_FCRoutineBegin() {
  //------Prepare to start Routine 'Test_FC'-------
  t = 0;
  Test_FCClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  Target_ins2.setText(instr);
  Trigger_img2.setImage(trig_img);
  Target_img2.setImage(targ_img);
  Trigger_txt2.setText(trig);
  FC_resp = new core.BuilderKeyResponse(psychoJS);
  Resp_a.setText(a);
  Resp_b.setText(k);
  // keep track of which components have finished
  Test_FCComponents = [];
  Test_FCComponents.push(Target_ins2);
  Test_FCComponents.push(Trigger_img2);
  Test_FCComponents.push(Target_img2);
  Test_FCComponents.push(Trigger_txt2);
  Test_FCComponents.push(Target_instr_l);
  Test_FCComponents.push(Target_instr_r);
  Test_FCComponents.push(FC_resp);
  Test_FCComponents.push(Resp_a);
  Test_FCComponents.push(Resp_b);
  
  for (const thisComponent of Test_FCComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Test_FCRoutineEachFrame() {
  //------Loop for each frame of Routine 'Test_FC'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Test_FCClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Target_ins2* updates
  if (t >= 4 && Target_ins2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_ins2.tStart = t;  // (not accounting for frame time here)
    Target_ins2.frameNStart = frameN;  // exact frame index
    Target_ins2.setAutoDraw(true);
  }

  
  // *Trigger_img2* updates
  if (t >= 0.0 && Trigger_img2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Trigger_img2.tStart = t;  // (not accounting for frame time here)
    Trigger_img2.frameNStart = frameN;  // exact frame index
    Trigger_img2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Trigger_img2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Trigger_img2.setAutoDraw(false);
  }
  
  // *Target_img2* updates
  if (t >= 4 && Target_img2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_img2.tStart = t;  // (not accounting for frame time here)
    Target_img2.frameNStart = frameN;  // exact frame index
    Target_img2.setAutoDraw(true);
  }

  
  // *Trigger_txt2* updates
  if (t >= 0.0 && Trigger_txt2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Trigger_txt2.tStart = t;  // (not accounting for frame time here)
    Trigger_txt2.frameNStart = frameN;  // exact frame index
    Trigger_txt2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Trigger_txt2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Trigger_txt2.setAutoDraw(false);
  }
  
  // *Target_instr_l* updates
  if (t >= 4 && Target_instr_l.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_instr_l.tStart = t;  // (not accounting for frame time here)
    Target_instr_l.frameNStart = frameN;  // exact frame index
    Target_instr_l.setAutoDraw(true);
  }

  
  // *Target_instr_r* updates
  if (t >= 4 && Target_instr_r.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Target_instr_r.tStart = t;  // (not accounting for frame time here)
    Target_instr_r.frameNStart = frameN;  // exact frame index
    Target_instr_r.setAutoDraw(true);
  }

  
  // *FC_resp* updates
  if (t >= 4 && FC_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    FC_resp.tStart = t;  // (not accounting for frame time here)
    FC_resp.frameNStart = frameN;  // exact frame index
    FC_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { FC_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (FC_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['a', 'k']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      FC_resp.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      FC_resp.rt = FC_resp.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *Resp_a* updates
  if (t >= 4 && Resp_a.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Resp_a.tStart = t;  // (not accounting for frame time here)
    Resp_a.frameNStart = frameN;  // exact frame index
    Resp_a.setAutoDraw(true);
  }

  
  // *Resp_b* updates
  if (t >= 4 && Resp_b.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Resp_b.tStart = t;  // (not accounting for frame time here)
    Resp_b.frameNStart = frameN;  // exact frame index
    Resp_b.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Test_FCComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Test_FCRoutineEnd() {
  //------Ending Routine 'Test_FC'-------
  for (const thisComponent of Test_FCComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(FC_resp.keys) >= 0) {    // No response was made
      FC_resp.keys = undefined;
  }
  
  psychoJS.experiment.addData('FC_resp.keys', FC_resp.keys);
  if (typeof FC_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('FC_resp.rt', FC_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Test_FC" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_3;
var Thank_youComponents;
function Thank_youRoutineBegin() {
  //------Prepare to start Routine 'Thank_you'-------
  t = 0;
  Thank_youClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_3 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Thank_youComponents = [];
  Thank_youComponents.push(text);
  Thank_youComponents.push(key_resp_3);
  
  for (const thisComponent of Thank_youComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Thank_youRoutineEachFrame() {
  //------Loop for each frame of Routine 'Thank_you'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Thank_youClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    key_resp_3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
  }

  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['q']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Thank_youComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Thank_youRoutineEnd() {
  //------Ending Routine 'Thank_you'-------
  for (const thisComponent of Thank_youComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "Thank_you" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
