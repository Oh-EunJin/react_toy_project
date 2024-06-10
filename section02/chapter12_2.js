// 음식을 주문하는 함수
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000)
};

// 음식을 식히는 함수
function coolDownFood(food, callback) {
    setTimeout(() => {
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000);
};

// 음식을 냉동하는 함수
function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
};

orderFood((food) => {
    console.log(food);

    coolDownFood(food, (coolDownedFood) => {
        console.log(coolDownedFood);

        freezeFood(coolDownedFood, (freezedFood) => {
            console.log(freezedFood);
        })

    });
})