import { createSlice } from '@reduxjs/toolkit';

interface availableLine  {
    value: number,
    label: string
} 

export interface SRTEditorState {
    currentLang: string;
    charactersPerLine: number;
    linesPerParagraph: number,
    availableLines: availableLine[]
}

export const srtEditorSlice: any = createSlice({
    name: 'srtEditor',
    initialState: { 
        currentLang: 'ro',
        charactersPerLine: 39,
        linesPerParagraph: 3,
        availableLines: [
            { value: 1, label : '1'},
            { value: 2, label : '2'},
            { value: 3, label : '3'},
            { value: 4, label : '4'},
        ]
        
     } as SRTEditorState,
    reducers: {
        setCurrentLang: (state, { payload }) => {
            state.currentLang = payload;
        },
        setCharactersPerLine: (state, { payload }) => {
            state.charactersPerLine = payload;
        },
        setLinesPerParagraph: (state, { payload }) => {
            state.linesPerParagraph = payload;
        },

    }
});

export const { setCurrentLang, setCharactersPerLine, setLinesPerParagraph  } = srtEditorSlice.actions;
