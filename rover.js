// Rover Object Goes Here
// ======================


const map = {
  obstacles: [
    { x: 6, y: 3 },
    { x: 5, y: 7 },
  ]
}

const rover = {
  direction: 'N', 
  position: [{ x: 5, y: 5 }],
  travelLog: [] 
  
};

function turnRover(rover, direction) {
  switch (direction) {
    case 'f':
      moveForward(rover);
      break;
    case 'b':
      moveBackward(rover);
      break;
  }
}


function turnLeft(rover) {
  direction = rover.direction;
  console.log('turnLeft was called!\n');
  switch (direction) {
    case 'N':
      console.log('Rover is now facing West\n');
      rover.direction = 'W';
      break;
    case 'W':
      console.log('Rover is now facing South\n');
      rover.direction = 'S';
      break;
    case 'S':
      console.log('Rover is now facing East\n');
      rover.direction = 'E';
      break;
    case 'E':
      console.log('Rover is now facing North\n');
      rover.direction = 'N';
      break;
  }
}


function turnRight(rover) {
  direction = rover.direction;
  console.log('turnRight was called!\n');
  switch (direction) {
    case 'N':
      console.log('Rover is now facing East\n');
      rover.direction = 'E';
      break;
    case 'E':
      console.log('Rover is now facing South\n');
      rover.direction = 'S';
      break;
    case 'S':
      console.log('Rover is now facing West\n');
      rover.direction = 'W';
      break;
    case 'W':
      console.log('Rover is now facing North\n');
      rover.direction = 'N';
      break;
  }
}

/*
function turnRover(turn, direction) {
  direction = rover.direction;
  if (turn == 'r') { // r = right
    switch (direction) {
      case 'N':
        turnRight(rover);
        console.log('Rover is now facing East');
        rover.direction = 'E';
        break;
      case 'E':
        turnRight(rover);
        console.log('Rover is now facing South');
        rover.direction = 'S';
        break;
      case 'S':
        turnRight(rover);
        console.log('Rover is now facing West');
        rover.direction = 'W';
        break;
      case 'W':
        turnRight(rover);
        console.log('Rover is now facing North');
        rover.direction = 'N';
        break;
    }
  }
  if (turn == 'l') { // r = right
    switch (direction) {
      case 'N':
        turnLeft(rover);
        console.log('Rover is now facing West');
        rover.direction = 'W';
        break;
      case 'W':
        turnLeft(rover);
        console.log('Rover is now facing South');
        rover.direction = 'S';
        break;
      case 'S':
        turnLeft(rover);
        console.log('Rover is now facing East');
        rover.direction = 'E';
        break;
      case 'E':
        turnLeft(rover);
        console.log('Rover is now facing North');
        rover.direction = 'N';
        break;
    }
  }
}   */

function moveForward(rover) {
  if (checkForObstaclesForward(rover, rover.direction) == false) {
    console.log('You can\'t move here. There is an obstacle!\n');
  } else if (rover.position[0].x > 0 && rover.position[0].y > 0 && rover.position[0].x < 10 && rover.position[0].y < 10) {
    const { direction } = rover;

    const roverMoveHistory = { // for travelLog
      x: rover.position[0].x,
      y: rover.position[0].y,
    }; // new position

    switch (direction) {
      case 'W':
        rover.position[0].x = rover.position[0].x - 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);


        rover.travelLog.push(roverMoveHistory);
        break;
      case 'N':
        rover.position[0].y = rover.position[0].y - 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);

        rover.travelLog.push(roverMoveHistory);
        break;
      case 'S':
        rover.position[0].y = rover.position[0].y + 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);

        rover.travelLog.push(roverMoveHistory);
        break;
      case 'E':
        rover.position[0].x = rover.position[0].x + 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);

        rover.travelLog.push(roverMoveHistory);
        break;
    }
  } else {
    console.log(`\nYou can't move rover outside the grid. Right now it's on on position: x = ${rover.position[0].x}, y = ${rover.position[0].y} and facing ${rover.direction}.`);
  }
}

function moveBackward(rover) {
  if (checkForObstaclesBackward(rover, rover.direction) == false) {
    console.log('You can\'t move here. There is an obstacle!\n');
  } else if (rover.position[0].x > 0 && rover.position[0].y > 0 && rover.position[0].x < 10 && rover.position[0].y < 10) {
    const { direction } = rover;

    switch (direction) {
      case 'W':
        rover.position[0].x = rover.position[0].x + 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);
        break;
      case 'N':
        rover.position[0].y = rover.position[0].y + 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);
        break;
      case 'S':
        rover.position[0].y = rover.position[0].y - 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);
        break;
      case 'E':
        rover.position[0].x = rover.position[0].x - 1;
        console.log(`moveForward was called. Rover is on position: x = ${rover.position[0].x}, y = ${rover.position[0].y}\n`);
        break;
    }
  } else {
    console.log(`\nYou can't move rover outside the grid. Right now it's on on position: x = ${rover.position[0].x}, y = ${rover.position[0].y} and facing ${rover.direction}.`);
  }
}


function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    switch (order) {
      case 'f': // forward
        moveForward(rover);
        break;
      case 'r': // right
        turnRight(rover);
        break;
      case 'l': // left
        turnLeft(rover);
        break;
      case 'b': // backward
        moveBackward(rover);
        break;
      default:
        console.log('Incorrect input. You can use only \'f\', \'b\', \'r\', \'l\'.\n');
        break;
    }
  }
}

function checkForObstaclesForward(rover, direction) {
  switch (direction) {
    case 'W':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x - 1 == obstacle.x && rover.position[0].y == obstacle.y) {
          return false;
        }
      }
      break;
    case 'N':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x == obstacle.x && rover.position[0].y - 1 == obstacle.y) {
          return false;
        }
      }
      break;
    case 'S':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x == obstacle.x && rover.position[0].y + 1 == obstacle.y) {
          return false;
        }
      }
      break;
    case 'E':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x + 1 == obstacle.x && rover.position[0].y == obstacle.y) {
          return false;
        }
      }
      break;
  }
  return true;
}


function checkForObstaclesBackward(rover, direction) {
  switch (direction) {
    case 'W':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x + 1 == obstacle.x && rover.position[0].y == obstacle.y) {
          return false;
        }
      }
      break;
    case 'N':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x == obstacle.x && rover.position[0].y + 1 == obstacle.y) {
          return false;
        }
      }
      break;
    case 'S':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x == obstacle.x && rover.position[0].y - 1 == obstacle.y) {
          return false;
        }
      }
      break;
    case 'E':
      for (let i = 0; i < map.obstacles.length; i++) {
        const obstacle = map.obstacles[i];
        if (rover.position[0].x - 1 == obstacle.x && rover.position[0].y == obstacle.y) {
          return false;
        }
      }
      break;
  }
  return true;
}

command(rover, 'fff');
console.log(rover.travelLog)
