import { CHANGE_SEARCH } from './action-types';

export default function changeSearch(payload) {
  return { type: CHANGE_SEARCH, payload };
}
