import { InitialCitiesState, CitiesActions, CitiesActionsTypes } from "./types";

const initialState: InitialCitiesState = {
  city: null,
};

export const citiesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: CitiesActions
): InitialCitiesState => {
  switch (action.type) {
    case CitiesActionsTypes.CITIES_LOADED:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
