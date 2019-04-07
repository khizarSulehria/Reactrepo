import { createStore } from 'redux';

import {reducer} from './reducer/counter';

export const store = createStore(reducer);