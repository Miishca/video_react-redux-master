const MOVE_LEFT = 'position/MOVE_LEFT';
const MOVE_RIGHT = 'position/MOVE_RIGHT';
const MOVE_UP = 'position/MOVE_UP';
const MOVE_DOWN = 'position/MOVE_DOWN';

const startPosition = { x: 0, y: 0 };

const positionReducer = (position = startPosition, action) => {
  return position;
};

export default positionReducer;
