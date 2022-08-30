import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import CommonButton from '../../component/common/CommonButton';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const ProgressStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    const [nextButtonDisable, setNextButtonDisable] = React.useState<boolean>(false)
    const [previousButtonDisable, setPreviousButtonDisable] = React.useState<boolean>(false)

    const completedSteps: number = Object.keys(completed).length; //size of completed
    const totalSteps: number = steps.length;
    const allStepsCompleted: boolean = completedSteps === totalSteps; // if completedsteps === totalsteps, allStepscompleted = true

    const handleNext = () => {
        const newCompleted:{[k:number]: boolean} = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(`completedSteps: ${completedSteps} \n totalSteps: ${totalSteps}`);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () =>{
        setCompleted({});
        setActiveStep(0);
    }


    return (
        <>
            <Stepper activeStep={activeStep} >
                {steps.map( (step, index)=>(
                    <Step key={step} completed={completed[index]}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )
                )}
            </Stepper>
            <div>
                {allStepsCompleted ? 
                <>
                    <Typography mt={1}>All Steps Completed</Typography>
                    <CommonButton onClick={handleReset}>Reset</CommonButton>
                </> :
                <>
                    <Typography mt={1}>Step {activeStep + 1}</Typography> 
                    <Box>

                        <CommonButton
                        disabled={false}
                        onClick={handleNext}
                        sx={{float:'left'}}
                        >
                            {activeStep === totalSteps - 1 ? 'finish' : 'Next Step'}
                        </CommonButton>
                        <Button 
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{float:'right'}}
                         >
                            Previous Step</Button>
                    </Box>
                </>
                }
            </div>
        </>
    )
}

export default ProgressStepper