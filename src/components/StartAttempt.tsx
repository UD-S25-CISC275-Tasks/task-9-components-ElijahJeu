import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setattempts] = useState<number>(4);
    const [quizInProgress, setQuizInprogress] = useState<boolean>(false);

    function Mulligan(): void {
        setattempts(attempts + 1);
    }

    function StopQuiz(): void {
        setQuizInprogress(false);
    }
    function StartClick(): void {
        if (attempts > 0) {
            setQuizInprogress(true);
            setattempts(attempts - 1);
        }
    }

    return (
        <div>
            <div>Attempts Left: {attempts}</div>
            <Button
                onClick={StartClick}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button onClick={StopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={Mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
