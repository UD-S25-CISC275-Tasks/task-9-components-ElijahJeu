import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [Die1, SetDie1] = useState<number>(4);
    const [Die2, SetDie2] = useState<number>(2);
    function RollLeft(): void {
        SetDie1(d6());
    }
    function RollRight(): void {
        SetDie2(d6());
    }

    return (
        <div>
            Two Dice
            <span data-testid="left-die">{Die1}</span>
            <span data-testid="right-die">{Die2}</span>
            <Button onClick={RollLeft}>Roll Left</Button>
            {Die1 === Die2 && Die1 != 1 && <div> You Win!</div>}
            {Die1 === Die2 && Die1 === 1 && <div> You Lose</div>}
            <Button onClick={RollRight}>Roll Right</Button>
        </div>
    );
}
