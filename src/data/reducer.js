import { combineReducers } from 'redux';

import { user } from './user/reducer';
import { organizaciones } from './organizaciones/reducer';
import { organizacion } from './organizacion/reducer';

export const data = combineReducers({
  user,
  organizaciones,
  organizacion
});
