import { combineReducers } from 'redux';
import { srtEditorReducer } from './srt-editor';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    srtEditor: srtEditorReducer
});

export default rootReducer;
