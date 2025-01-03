import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function SubSection6() {
    // Manage the expanded state of the accordion
    const [expanded, setExpanded] = React.useState('panel1');

    // Function to handle the change of the accordion state
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="flex items-center justify-center flex-col w-full max-w-[1080px] px-4 sm:px-8 lg:px-12 pt-10 text-start">
            <Button
                variant="outlined"
                sx={{
                    borderRadius: "60px", // Rounded full equivalent
                    paddingX: 4,         // Adjust padding for responsiveness
                    marginY: 4,
                    fontSize: '0.875rem', // Adjust font size for smaller screens
                    '@media (min-width:600px)': {
                        paddingX: 6, // Larger padding for medium screens
                        fontSize: '1rem',
                    },
                }}
            >
                FAQs
            </Button>

            {/* Accordion Section */}
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className="w-full"
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" variant="h6" fontWeight="bold">
                        What is an AI Agent?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:
                    <br />- Natural Language Processing to interpret resumes and candidate responses
                    <br />- Adaptive Learning to improve accuracy and efficiency over time
                    <br />- Task Automation to handle repetitive or time-consuming steps
                    <br />- Data-Driven Insights for better predictions and decisions
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className="w-full"
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span" variant="h6" fontWeight="bold">
                        What are the Benefits of Using Recruito’s AI Agent?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Using Recruito’s AI Agent provides the following benefits:
                    <br />- Streamlined hiring process with automation
                    <br />- Improved accuracy through adaptive learning
                    <br />- Enhanced candidate experience with quicker responses
                    <br />- Data insights for better hiring decisions
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className="w-full"
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span" variant="h6" fontWeight="bold">
                        Next Steps?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    The next steps for integrating an AI agent include:
                    <br />- Assessing your hiring needs and defining clear goals
                    <br />- Configuring Recruito AI to align with your requirements
                    <br />- Training your team to utilize AI-driven tools effectively
                    <br />- Measuring impact and optimizing the process over time
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
