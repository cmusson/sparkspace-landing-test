import Logo from "../public/logo.svg"

import GoogleClassroomIcon from "./assets/landing/google-classroom.svg"
import RubricIcon from "./assets/landing/rubric.svg"
import GradedPaperIcon from "./assets/landing/paper.svg"
import WarningIcon from "./assets/landing/warning.svg"
import { Card } from "@/components/ui/card"
import { Button } from "./components/ui/button"
import { useTypewriter } from "./hooks/useTypewriter"

import Stack from "@mui/material/Stack"
import { Gauge } from "@mui/x-charts/Gauge"
import { useAddition } from "./hooks/useAddition"

// Type animation
const TYPEWRITER_SPEED = 50
// Arc and percentage animation
const PERCENTAGE_START = 0
const PERCENTAGE_MAX = 40
const PERCENTAGE_STEP = 1

const CANNED_FEEDBACK =
    "**Summary Evaluation Against Rubric: Accuracy (10/10):** The essay presents accurate information about Abraham Lincoln's life, presidency, and significant contributions, including key events like his election, the Civil..."

const App = () => {
    const typewriterText = useTypewriter(CANNED_FEEDBACK, TYPEWRITER_SPEED)
    const currentPercentage = useAddition(PERCENTAGE_START, PERCENTAGE_MAX, PERCENTAGE_STEP)

    return (
        <div className="flex min-h-screen w-full flex-1 flex-col">
            <div className="h-2 bg-navy-800"></div>
            <div className="sticky h-10 px-5">
                <div>
                    <img className="h-10" src={Logo} alt="Logo" />
                </div>
            </div>
            <div>
                <div>
                    <p className="mt-10 text-center text-4xl font-bold text-navy-900">Save Time Grading Essays</p>

                    <p className="mt-5 text-center text-lg font-semibold">For ELA teachers in grades 5-12</p>

                    <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-4">
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GradedPaperIcon} alt="Graded Paper" />

                                <p>AI Feedback</p>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div>
                                    <p className="text-sm">{typewriterText}</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <img className="h-16 w-16" src={WarningIcon} alt="AI Detection" />
                                <p>AI Detection</p>
                            </div>
                            <div className="flex w-[200px] items-center justify-center">
                                <div>
                                    <p className="mb-3 text-center text-sm">Probability AI generated</p>
                                    <div className="relative flex items-center justify-center">
                                        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
                                            <Gauge
                                                width={150}
                                                height={150}
                                                text={({ value }) => `${value}%`}
                                                value={currentPercentage}
                                                startAngle={-90}
                                                endAngle={90}
                                            />
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={GoogleClassroomIcon} alt="Import Essays" />

                                <p>Import Essays</p>
                            </div>
                            <div className="flex w-[200px] flex-col items-center justify-center">
                                <p>Click below!</p>
                                <div className="animate-growOnce text-navy-800">{"↓"}</div>
                            </div>
                        </Card>
                        <Card className="flex h-[220px] w-[370px] justify-center gap-2 rounded p-5">
                            <div className="flex flex-col items-center justify-center">
                                <img className="h-16 w-16" src={RubricIcon} alt="Use Your Rubric" />

                                <p>Use Your Rubric</p>
                            </div>

                            <div className="flex w-[200px] flex-col items-center justify-center">
                                <p>Click below!</p>
                                <div className="animate-growOnce text-navy-800">{"↓"}</div>
                            </div>
                        </Card>
                    </div>
                    <div className="mt-10 flex animate-bounce justify-center">
                        <Button>Try It Free</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
