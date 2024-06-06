const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAction = {
  type: typeof ADD;
  payload: number;
};

const add = (value: number): AddAction => ({
  type: ADD,
  payload: value,
});

type TakeAction = {
  type: typeof TAKE;
  payload: number;
};

const take = (value: number): TakeAction => ({
  type: TAKE,
  payload: value,
});

type ClearAction = { type: typeof CLEAR };

const clear = (): ClearAction => ({ type: CLEAR });

type Action = AddAction | TakeAction | ClearAction;

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;

    case 'amount/TAKE': {
      if (action.payload > amount) {
        return amount;
      }

      return amount - action.payload;
    }

    case 'amount/CLEAR':
      return 0;
    default:
      return amount;
  }
};

export const actions = { add, take, clear };

export default amountReducer;
