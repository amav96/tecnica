import { combineReducers } from 'redux';
import { srtEditorSlice } from './srtEditor.slice';

export const srtEditorReducer = combineReducers({
    srtEditor: srtEditorSlice.reducer
});

export const srtEditorActions = {
    ...srtEditorSlice.actions
};
