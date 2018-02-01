function test1() {
  
  function showColor(isBlack) {
    if (isBlack) {
      var blackColor = 'Black';
    } else {
      var whiteColor = 'White';
      console.log(blackColor);
    }
  }

  showColor(false);
}

function test2() {
  
  function showColor(isBlack) {
    if (isBlack) {
      const blackColor = 'Black';
    } else {
      const whiteColor = 'White';
      console.log(blackColor);
    }
  }

  showColor(false);
}

test1();
test2();
