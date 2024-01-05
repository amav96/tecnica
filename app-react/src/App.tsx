import React, { useMemo } from 'react';
import data from './original.json';

interface WordObject {
    word: string;
    start: number;
    end: number;
}

interface SentenceInfo {
    start: number;
    end: number;
    text: string;
    words: WordObject[];
}

const App: React.FC = () => {
    const splitSentences = (entry: SentenceInfo): SentenceInfo[] => {
        const sentences = entry.text.split(/(?<=\.)/).filter((e) => e);

        const result: SentenceInfo[] = [];

        sentences.forEach((sentence) => {
            result.push({
                start: entry.start,
                end: entry.end,
                text: `${sentence}`,
                words: sentence
                    .split(' ')
                    .filter((e) => e)
                    .map(
                        (e) =>
                            ({
                                word: e,
                                start: entry.words.find((w) => w.word === e)?.start,
                                end: entry.words.find((w) => w.word === e)?.end
                            } as WordObject)
                    )
            });
        });

        return result;
    };

    const sentencesArray: SentenceInfo[] = useMemo(() => {
        const newData = data.flatMap((entry) => splitSentences(entry));
        return newData;
    }, [data]);
    
    const paragraphs = sentencesArray.map((sentence) => (
        <p key={sentence.text}>{sentence.words.map((wordObj) => wordObj.word).join(' ')}</p>
    ));

    return <div>{paragraphs}</div>;
};

export default App;
