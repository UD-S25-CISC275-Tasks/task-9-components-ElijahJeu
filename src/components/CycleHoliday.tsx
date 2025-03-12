import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");
    const holidaysWithEmojis: { [key: string]: string } = {
        Christmas: "🎄",
        Halloween: "🎃",
        NewYear: "🎆",
        Easter: "🐣",
        Thanksgiving: "🦃",
    };
    const Alphabet: string[] = [
        "Christmas",
        "Easter",
        "Halloween",
        "New Year's Day",
        "Thanksgiving",
    ];
    const dates: string[] = [
        "New Year's Day",
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas",
    ];

    function advanceLetter(): void {
        const index = Alphabet.indexOf(holiday);
        const next = Alphabet[(index + 1) % Alphabet.length];
        setHoliday(next);
    }
    function advanceDate(): void {
        const index = dates.indexOf(holiday);
        const next = dates[(index + 1) % dates.length];
        setHoliday(next);
    }

    return (
        <div>
            <h3>
                Holiday: {holidaysWithEmojis[holiday]} {holiday}
            </h3>
            <Button onClick={advanceLetter}>Advance by Alphabet</Button>
            <Button onClick={advanceDate}>Advance by Year</Button>
        </div>
    );
}
