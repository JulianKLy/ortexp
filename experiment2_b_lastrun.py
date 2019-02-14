#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.3),
    on februar 14, 2019, at 14:43
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.0.3'
expName = 'experiment2_b'  # from the Builder filename that created this script
expInfo = {'gender': '', 'age': '', 'participant': '001', 'language': ''}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\julianrl_adm\\Experiment_Orthography\\experiment2_b_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0,
    allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1.000,1.000,1.000], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "Instruction_Intro"
Instruction_IntroClock = core.Clock()
lub = visual.ImageStim(
    win=win, name='lub',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
import random
condition = random.choice(('A','B'))

# Initialize components for Routine "ISI_Pre"
ISI_PreClock = core.Clock()
ISI = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI')
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',units='deg', 
    size=(0.5, 0.5),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)

# Initialize components for Routine "Exposure"
ExposureClock = core.Clock()
Sing_img = visual.ImageStim(
    win=win, name='Sing_img',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
Pl_img = visual.ImageStim(
    win=win, name='Pl_img',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Sing_txt = visual.TextStim(win=win, name='Sing_txt',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
Pl_txt = visual.TextStim(win=win, name='Pl_txt',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "ISI_1sec"
ISI_1secClock = core.Clock()
ISI_2 = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI_2')

# Initialize components for Routine "Instruction_Prod"
Instruction_ProdClock = core.Clock()
image_3 = visual.ImageStim(
    win=win, name='image_3',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "ISI_Pre"
ISI_PreClock = core.Clock()
ISI = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI')
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',units='deg', 
    size=(0.5, 0.5),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)

# Initialize components for Routine "Test_Prod"
Test_ProdClock = core.Clock()
Target_ins1 = visual.TextStim(win=win, name='Target_ins1',
    text='default text',
    font='Arial',
    units='norm', pos=(0, 0.85), height=0.1, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Trigger_img1 = visual.ImageStim(
    win=win, name='Trigger_img1',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Target_img1 = visual.ImageStim(
    win=win, name='Target_img1',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
Trigger_txt1 = visual.TextStim(win=win, name='Trigger_txt1',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
inputText = ""
txtinp = visual.TextStim(win=win, name='txtinp',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "ISI_1sec"
ISI_1secClock = core.Clock()
ISI_2 = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI_2')

# Initialize components for Routine "Instruction_FC"
Instruction_FCClock = core.Clock()
image_6 = visual.ImageStim(
    win=win, name='image_6',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "ISI_Pre"
ISI_PreClock = core.Clock()
ISI = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI')
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',units='deg', 
    size=(0.5, 0.5),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)

# Initialize components for Routine "Test_FC"
Test_FCClock = core.Clock()
Target_ins2 = visual.TextStim(win=win, name='Target_ins2',
    text='default text',
    font='Arial',
    units='norm', pos=(0, 0.85), height=0.1, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Trigger_img2 = visual.ImageStim(
    win=win, name='Trigger_img2',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Target_img2 = visual.ImageStim(
    win=win, name='Target_img2',units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
Trigger_txt2 = visual.TextStim(win=win, name='Trigger_txt2',
    text='default text',
    font='Arial',
    units='norm', pos=(0, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
Target_instr_l = visual.TextStim(win=win, name='Target_instr_l',
    text='Press a\n\n',
    font='Arial',
    units='norm', pos=(-0.5, -0.9), height=0.08, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
Target_instr_r = visual.TextStim(win=win, name='Target_instr_r',
    text='Press k',
    font='Arial',
    units='norm', pos=(0.5, -0.8), height=0.08, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
Resp_a = visual.TextStim(win=win, name='Resp_a',
    text='default text',
    font='Arial',
    units='norm', pos=(-0.5, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
Resp_b = visual.TextStim(win=win, name='Resp_b',
    text='default text',
    font='Arial',
    units='norm', pos=(0.5, -0.6), height=0.3, wrapWidth=None, ori=0, 
    color=[1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "ISI_1sec"
ISI_1secClock = core.Clock()
ISI_2 = clock.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI_2')

# Initialize components for Routine "Thank_you"
Thank_youClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Thank you very much for participating!\n\nPress q to quit.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Instruction_Intro"-------
t = 0
Instruction_IntroClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_1 = event.BuilderKeyResponse()
lub.setImage("Images/intro"+condition+".png")

# keep track of which components have finished
Instruction_IntroComponents = [key_resp_1, lub]
for thisComponent in Instruction_IntroComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction_Intro"-------
while continueRoutine:
    # get current time
    t = Instruction_IntroClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_1* updates
    if t >= 0.0 and key_resp_1.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_1.tStart = t
        key_resp_1.frameNStart = frameN  # exact frame index
        key_resp_1.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_1.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_1.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_1.keys = theseKeys[-1]  # just the last key pressed
            key_resp_1.rt = key_resp_1.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # *lub* updates
    if t >= 0.0 and lub.status == NOT_STARTED:
        # keep track of start time/frame for later
        lub.tStart = t
        lub.frameNStart = frameN  # exact frame index
        lub.setAutoDraw(True)
    
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruction_IntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction_Intro"-------
for thisComponent in Instruction_IntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_1.keys in ['', [], None]:  # No response was made
    key_resp_1.keys=None
thisExp.addData('key_resp_1.keys',key_resp_1.keys)
if key_resp_1.keys != None:  # we had a response
    thisExp.addData('key_resp_1.rt', key_resp_1.rt)
thisExp.nextEntry()

# the Routine "Instruction_Intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ISI_Pre"-------
t = 0
ISI_PreClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
ISI_PreComponents = [ISI, fixation]
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "ISI_Pre"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = ISI_PreClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fixation* updates
    if t >= 0.0 and fixation.status == NOT_STARTED:
        # keep track of start time/frame for later
        fixation.tStart = t
        fixation.frameNStart = frameN  # exact frame index
        fixation.setAutoDraw(True)
    frameRemains = 0.0 + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if fixation.status == STARTED and t >= frameRemains:
        fixation.setAutoDraw(False)
    # *ISI* period
    if t >= 0.0 and ISI.status == NOT_STARTED:
        # keep track of start time/frame for later
        ISI.tStart = t
        ISI.frameNStart = frameN  # exact frame index
        ISI.start(1)
    elif ISI.status == STARTED:  # one frame should pass before updating params and completing
        ISI.complete()  # finish the static period
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ISI_PreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ISI_Pre"-------
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions("Lists/Order"+condition+".xlsx", selection='np.random.choice(43, size = 20, replace = False)'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Exposure"-------
    t = 0
    ExposureClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(6.000000)
    # update component parameters for each repeat
    Sing_img.setImage(trig_img)
    Pl_img.setImage(targ_img)
    Sing_txt.setText(trig)
    Pl_txt.setText(targ)
    # keep track of which components have finished
    ExposureComponents = [Sing_img, Pl_img, Sing_txt, Pl_txt]
    for thisComponent in ExposureComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Exposure"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ExposureClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Sing_img* updates
        if t >= 0.0 and Sing_img.status == NOT_STARTED:
            # keep track of start time/frame for later
            Sing_img.tStart = t
            Sing_img.frameNStart = frameN  # exact frame index
            Sing_img.setAutoDraw(True)
        frameRemains = 0.0 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Sing_img.status == STARTED and t >= frameRemains:
            Sing_img.setAutoDraw(False)
        
        # *Pl_img* updates
        if t >= 3 and Pl_img.status == NOT_STARTED:
            # keep track of start time/frame for later
            Pl_img.tStart = t
            Pl_img.frameNStart = frameN  # exact frame index
            Pl_img.setAutoDraw(True)
        frameRemains = 3 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Pl_img.status == STARTED and t >= frameRemains:
            Pl_img.setAutoDraw(False)
        
        # *Sing_txt* updates
        if t >= 0.0 and Sing_txt.status == NOT_STARTED:
            # keep track of start time/frame for later
            Sing_txt.tStart = t
            Sing_txt.frameNStart = frameN  # exact frame index
            Sing_txt.setAutoDraw(True)
        frameRemains = 0.0 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Sing_txt.status == STARTED and t >= frameRemains:
            Sing_txt.setAutoDraw(False)
        
        # *Pl_txt* updates
        if t >= 3 and Pl_txt.status == NOT_STARTED:
            # keep track of start time/frame for later
            Pl_txt.tStart = t
            Pl_txt.frameNStart = frameN  # exact frame index
            Pl_txt.setAutoDraw(True)
        frameRemains = 3 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Pl_txt.status == STARTED and t >= frameRemains:
            Pl_txt.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ExposureComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Exposure"-------
    for thisComponent in ExposureComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "ISI_1sec"-------
    t = 0
    ISI_1secClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(0.750000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ISI_1secComponents = [ISI_2]
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "ISI_1sec"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ISI_1secClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *ISI_2* period
        if t >= 0.0 and ISI_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            ISI_2.tStart = t
            ISI_2.frameNStart = frameN  # exact frame index
            ISI_2.start(0.75)
        elif ISI_2.status == STARTED:  # one frame should pass before updating params and completing
            ISI_2.complete()  # finish the static period
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ISI_1secComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ISI_1sec"-------
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "Instruction_Prod"-------
t = 0
Instruction_ProdClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
image_3.setImage("Images/instrProd"+condition+".png")
key_resp_2 = event.BuilderKeyResponse()
# keep track of which components have finished
Instruction_ProdComponents = [image_3, key_resp_2]
for thisComponent in Instruction_ProdComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction_Prod"-------
while continueRoutine:
    # get current time
    t = Instruction_ProdClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_3* updates
    if t >= 0.0 and image_3.status == NOT_STARTED:
        # keep track of start time/frame for later
        image_3.tStart = t
        image_3.frameNStart = frameN  # exact frame index
        image_3.setAutoDraw(True)
    
    # *key_resp_2* updates
    if t >= 0.0 and key_resp_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_2.tStart = t
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_2.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_2.keys = theseKeys[-1]  # just the last key pressed
            key_resp_2.rt = key_resp_2.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruction_ProdComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction_Prod"-------
for thisComponent in Instruction_ProdComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys=None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# the Routine "Instruction_Prod" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ISI_Pre"-------
t = 0
ISI_PreClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
ISI_PreComponents = [ISI, fixation]
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "ISI_Pre"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = ISI_PreClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fixation* updates
    if t >= 0.0 and fixation.status == NOT_STARTED:
        # keep track of start time/frame for later
        fixation.tStart = t
        fixation.frameNStart = frameN  # exact frame index
        fixation.setAutoDraw(True)
    frameRemains = 0.0 + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if fixation.status == STARTED and t >= frameRemains:
        fixation.setAutoDraw(False)
    # *ISI* period
    if t >= 0.0 and ISI.status == NOT_STARTED:
        # keep track of start time/frame for later
        ISI.tStart = t
        ISI.frameNStart = frameN  # exact frame index
        ISI.start(1)
    elif ISI.status == STARTED:  # one frame should pass before updating params and completing
        ISI.complete()  # finish the static period
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ISI_PreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ISI_Pre"-------
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions("Lists/OrderProd"+condition+".xlsx", selection='np.random.choice(30, size = 10, replace = False)'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test_Prod"-------
    t = 0
    Test_ProdClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    Target_ins1.setText(instr)
    Trigger_img1.setImage(trig_img)
    Target_img1.setImage(targ_img)
    Trigger_txt1.setText(trig)
    theseKeys=""
    shift_flag = False
    txtinp.alignHoriz ='center'
    text_resp = event.BuilderKeyResponse()
    # keep track of which components have finished
    Test_ProdComponents = [Target_ins1, Trigger_img1, Target_img1, Trigger_txt1, txtinp, text_resp]
    for thisComponent in Test_ProdComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Test_Prod"-------
    while continueRoutine:
        # get current time
        t = Test_ProdClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Target_ins1* updates
        if t >= 5 and Target_ins1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_ins1.tStart = t
            Target_ins1.frameNStart = frameN  # exact frame index
            Target_ins1.setAutoDraw(True)
        
        # *Trigger_img1* updates
        if t >= 0.0 and Trigger_img1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Trigger_img1.tStart = t
            Trigger_img1.frameNStart = frameN  # exact frame index
            Trigger_img1.setAutoDraw(True)
        frameRemains = 0.0 + 5- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Trigger_img1.status == STARTED and t >= frameRemains:
            Trigger_img1.setAutoDraw(False)
        
        # *Target_img1* updates
        if t >= 5 and Target_img1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_img1.tStart = t
            Target_img1.frameNStart = frameN  # exact frame index
            Target_img1.setAutoDraw(True)
        
        # *Trigger_txt1* updates
        if t >= 0.0 and Trigger_txt1.status == NOT_STARTED:
            # keep track of start time/frame for later
            Trigger_txt1.tStart = t
            Trigger_txt1.frameNStart = frameN  # exact frame index
            Trigger_txt1.setAutoDraw(True)
        frameRemains = 0.0 + 5- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Trigger_txt1.status == STARTED and t >= frameRemains:
            Trigger_txt1.setAutoDraw(False)
        n= len(theseKeys)
        i = 0
        while i < n:
        
            if theseKeys[i] == 'return' and len(inputText) >1:
                # pressing RETURN means time to stop
                continueRoutine = False
                break
        
            elif theseKeys[i] == 'backspace':
                inputText = inputText[:-1]  # lose the final character
                i = i + 1
        
            elif theseKeys[i] == 'space':
                inputText += ' '
                i = i + 1
        
            elif theseKeys[i] in ['lshift', 'rshift']:
                shift_flag = True
                i = i + 1
        
            else:
                if len(theseKeys[i]) == 1:
                    # we only have 1 char so should be a normal key, 
                    # otherwise it might be 'ctrl' or similar so ignore it
                    if shift_flag:
                        inputText += chr( ord(theseKeys[i]) - ord(' '))
                        shift_flag = False
                    else:
                        inputText += theseKeys[i]
        
                i = i + 1
        
        
        # *txtinp* updates
        if t >= 5 and txtinp.status == NOT_STARTED:
            # keep track of start time/frame for later
            txtinp.tStart = t
            txtinp.frameNStart = frameN  # exact frame index
            txtinp.setAutoDraw(True)
        if txtinp.status == STARTED:  # only update if drawing
            txtinp.setText(inputText, log=False)
        
        # *text_resp* updates
        if t >= 5 and text_resp.status == NOT_STARTED:
            # keep track of start time/frame for later
            text_resp.tStart = t
            text_resp.frameNStart = frameN  # exact frame index
            text_resp.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(text_resp.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        if text_resp.status == STARTED:
            theseKeys = event.getKeys()
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                text_resp.keys.extend(theseKeys)  # storing all keys
                text_resp.rt.append(text_resp.clock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_ProdComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_Prod"-------
    for thisComponent in Test_ProdComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # let's store the final text string into the results finle...
    thisExp.addData('inputText', inputText)
    inputText=""
    # check responses
    if text_resp.keys in ['', [], None]:  # No response was made
        text_resp.keys=None
    trials_2.addData('text_resp.keys',text_resp.keys)
    if text_resp.keys != None:  # we had a response
        trials_2.addData('text_resp.rt', text_resp.rt)
    # the Routine "Test_Prod" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ISI_1sec"-------
    t = 0
    ISI_1secClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(0.750000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ISI_1secComponents = [ISI_2]
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "ISI_1sec"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ISI_1secClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *ISI_2* period
        if t >= 0.0 and ISI_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            ISI_2.tStart = t
            ISI_2.frameNStart = frameN  # exact frame index
            ISI_2.start(0.75)
        elif ISI_2.status == STARTED:  # one frame should pass before updating params and completing
            ISI_2.complete()  # finish the static period
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ISI_1secComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ISI_1sec"-------
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_2'


# ------Prepare to start Routine "Instruction_FC"-------
t = 0
Instruction_FCClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
image_6.setImage("Images/instrFC"+condition+".png")
key_resp_4 = event.BuilderKeyResponse()
# keep track of which components have finished
Instruction_FCComponents = [image_6, key_resp_4]
for thisComponent in Instruction_FCComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Instruction_FC"-------
while continueRoutine:
    # get current time
    t = Instruction_FCClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_6* updates
    if t >= 0.0 and image_6.status == NOT_STARTED:
        # keep track of start time/frame for later
        image_6.tStart = t
        image_6.frameNStart = frameN  # exact frame index
        image_6.setAutoDraw(True)
    
    # *key_resp_4* updates
    if t >= 0.0 and key_resp_4.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_4.tStart = t
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_4.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_4.keys = theseKeys[-1]  # just the last key pressed
            key_resp_4.rt = key_resp_4.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instruction_FCComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruction_FC"-------
for thisComponent in Instruction_FCComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys=None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.nextEntry()
# the Routine "Instruction_FC" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ISI_Pre"-------
t = 0
ISI_PreClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
ISI_PreComponents = [ISI, fixation]
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "ISI_Pre"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = ISI_PreClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fixation* updates
    if t >= 0.0 and fixation.status == NOT_STARTED:
        # keep track of start time/frame for later
        fixation.tStart = t
        fixation.frameNStart = frameN  # exact frame index
        fixation.setAutoDraw(True)
    frameRemains = 0.0 + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if fixation.status == STARTED and t >= frameRemains:
        fixation.setAutoDraw(False)
    # *ISI* period
    if t >= 0.0 and ISI.status == NOT_STARTED:
        # keep track of start time/frame for later
        ISI.tStart = t
        ISI.frameNStart = frameN  # exact frame index
        ISI.start(1)
    elif ISI.status == STARTED:  # one frame should pass before updating params and completing
        ISI.complete()  # finish the static period
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ISI_PreComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ISI_Pre"-------
for thisComponent in ISI_PreComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# set up handler to look after randomisation of conditions etc
trials_3 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions("Lists/OrderFC"+condition+".xlsx", selection='np.random.choice(30, size = 10, replace = False)'),
    seed=None, name='trials_3')
thisExp.addLoop(trials_3)  # add the loop to the experiment
thisTrial_3 = trials_3.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
if thisTrial_3 != None:
    for paramName in thisTrial_3:
        exec('{} = thisTrial_3[paramName]'.format(paramName))

for thisTrial_3 in trials_3:
    currentLoop = trials_3
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_3.rgb)
    if thisTrial_3 != None:
        for paramName in thisTrial_3:
            exec('{} = thisTrial_3[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Test_FC"-------
    t = 0
    Test_FCClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    Target_ins2.setText(instr)
    Trigger_img2.setImage(trig_img)
    Target_img2.setImage(targ_img)
    Trigger_txt2.setText(trig)
    FC_resp = event.BuilderKeyResponse()
    Resp_a.setText(a)
    Resp_b.setText(k)
    # keep track of which components have finished
    Test_FCComponents = [Target_ins2, Trigger_img2, Target_img2, Trigger_txt2, Target_instr_l, Target_instr_r, FC_resp, Resp_a, Resp_b]
    for thisComponent in Test_FCComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "Test_FC"-------
    while continueRoutine:
        # get current time
        t = Test_FCClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Target_ins2* updates
        if t >= 4 and Target_ins2.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_ins2.tStart = t
            Target_ins2.frameNStart = frameN  # exact frame index
            Target_ins2.setAutoDraw(True)
        
        # *Trigger_img2* updates
        if t >= 0.0 and Trigger_img2.status == NOT_STARTED:
            # keep track of start time/frame for later
            Trigger_img2.tStart = t
            Trigger_img2.frameNStart = frameN  # exact frame index
            Trigger_img2.setAutoDraw(True)
        frameRemains = 0.0 + 4- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Trigger_img2.status == STARTED and t >= frameRemains:
            Trigger_img2.setAutoDraw(False)
        
        # *Target_img2* updates
        if t >= 4 and Target_img2.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_img2.tStart = t
            Target_img2.frameNStart = frameN  # exact frame index
            Target_img2.setAutoDraw(True)
        
        # *Trigger_txt2* updates
        if t >= 0.0 and Trigger_txt2.status == NOT_STARTED:
            # keep track of start time/frame for later
            Trigger_txt2.tStart = t
            Trigger_txt2.frameNStart = frameN  # exact frame index
            Trigger_txt2.setAutoDraw(True)
        frameRemains = 0.0 + 4- win.monitorFramePeriod * 0.75  # most of one frame period left
        if Trigger_txt2.status == STARTED and t >= frameRemains:
            Trigger_txt2.setAutoDraw(False)
        
        # *Target_instr_l* updates
        if t >= 4 and Target_instr_l.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_instr_l.tStart = t
            Target_instr_l.frameNStart = frameN  # exact frame index
            Target_instr_l.setAutoDraw(True)
        
        # *Target_instr_r* updates
        if t >= 4 and Target_instr_r.status == NOT_STARTED:
            # keep track of start time/frame for later
            Target_instr_r.tStart = t
            Target_instr_r.frameNStart = frameN  # exact frame index
            Target_instr_r.setAutoDraw(True)
        
        # *FC_resp* updates
        if t >= 4 and FC_resp.status == NOT_STARTED:
            # keep track of start time/frame for later
            FC_resp.tStart = t
            FC_resp.frameNStart = frameN  # exact frame index
            FC_resp.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(FC_resp.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        if FC_resp.status == STARTED:
            theseKeys = event.getKeys(keyList=['a', 'k'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                FC_resp.keys = theseKeys[-1]  # just the last key pressed
                FC_resp.rt = FC_resp.clock.getTime()
                # a response ends the routine
                continueRoutine = False
        
        # *Resp_a* updates
        if t >= 4 and Resp_a.status == NOT_STARTED:
            # keep track of start time/frame for later
            Resp_a.tStart = t
            Resp_a.frameNStart = frameN  # exact frame index
            Resp_a.setAutoDraw(True)
        
        # *Resp_b* updates
        if t >= 4 and Resp_b.status == NOT_STARTED:
            # keep track of start time/frame for later
            Resp_b.tStart = t
            Resp_b.frameNStart = frameN  # exact frame index
            Resp_b.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Test_FCComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Test_FC"-------
    for thisComponent in Test_FCComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if FC_resp.keys in ['', [], None]:  # No response was made
        FC_resp.keys=None
    trials_3.addData('FC_resp.keys',FC_resp.keys)
    if FC_resp.keys != None:  # we had a response
        trials_3.addData('FC_resp.rt', FC_resp.rt)
    # the Routine "Test_FC" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ISI_1sec"-------
    t = 0
    ISI_1secClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(0.750000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ISI_1secComponents = [ISI_2]
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "ISI_1sec"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ISI_1secClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *ISI_2* period
        if t >= 0.0 and ISI_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            ISI_2.tStart = t
            ISI_2.frameNStart = frameN  # exact frame index
            ISI_2.start(0.75)
        elif ISI_2.status == STARTED:  # one frame should pass before updating params and completing
            ISI_2.complete()  # finish the static period
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ISI_1secComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ISI_1sec"-------
    for thisComponent in ISI_1secComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_3'


# ------Prepare to start Routine "Thank_you"-------
t = 0
Thank_youClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_3 = event.BuilderKeyResponse()
# keep track of which components have finished
Thank_youComponents = [text, key_resp_3]
for thisComponent in Thank_youComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "Thank_you"-------
while continueRoutine:
    # get current time
    t = Thank_youClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if t >= 0.0 and text.status == NOT_STARTED:
        # keep track of start time/frame for later
        text.tStart = t
        text.frameNStart = frameN  # exact frame index
        text.setAutoDraw(True)
    
    # *key_resp_3* updates
    if t >= 0.0 and key_resp_3.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_3.tStart = t
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.status = STARTED
        # keyboard checking is just starting
    if key_resp_3.status == STARTED:
        theseKeys = event.getKeys(keyList=['q'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Thank_youComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Thank_you"-------
for thisComponent in Thank_youComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Thank_you" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()


# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
