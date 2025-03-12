import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    function toggleType(): void {
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <p>
                {" "}
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
