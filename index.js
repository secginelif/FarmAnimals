

function makeSound(){
    $(".cat").click(()=>{
        var cat = new Audio("sounds/cat.mp3");
        cat.play();
    })
    $(".dog").click(()=>{
        var dog = new Audio("sounds/dog.mp3");
        dog.play();
    })
    $(".sheep").click(()=>{
        var sheep = new Audio("sounds/sheep.mp3");
        sheep.play();
    })
    $(".pig").click(()=>{
        var pig = new Audio("sounds/pig.mp3");
        pig.play();
    })
    $(".rooster").click(()=>{
        var rooster = new Audio("sounds/rooster.mp3");
        rooster.play();
    })
    $(".chick").click(()=>{
        var chick = new Audio("sounds/chick.mp3");
        chick.play();
    })
    $(".chicken").click(()=>{
        var chicken = new Audio("sounds/chicken.mp3");
        chicken.play();
    })
    $(".horse").click(()=>{
        var horse = new Audio("sounds/horse.mp3");
        horse.play();
    })
    $(".man").click(()=>{
        var man = new Audio("sounds/man.mp3");
        man.play();
    })
    $(".cow").click(()=>{
        var cow = new Audio("sounds/cow.wav");
        cow.play();
    })
}



$(".cat").click(()=>{
    var cat = new Audio("sounds/cat.mp3");
    cat.play();
    buttonAnimation("cat");
})
$(".dog").click(()=>{
    var dog = new Audio("sounds/dog.mp3");
    dog.play();
    buttonAnimation("dog");
})
$(".sheep").click(()=>{
    var sheep = new Audio("sounds/sheep.mp3");
    sheep.play();
    buttonAnimation("sheep");
})
$(".pig").click(()=>{
    var pig = new Audio("sounds/pig.mp3");
    pig.play();
    buttonAnimation("pig");
})
$(".rooster").click(()=>{
    var rooster = new Audio("sounds/rooster.mp3");
    rooster.play();
    buttonAnimation("rooster");
})
$(".chick").click(()=>{
    var chick = new Audio("sounds/chick.mp3");
    chick.play();
    buttonAnimation("chick");
})
$(".chicken").click(()=>{
    var chicken = new Audio("sounds/chicken.mp3");
    chicken.play();
    buttonAnimation("chicken");
})
$(".horse").click(()=>{
    var horse = new Audio("sounds/horse.mp3");
    horse.play();
    buttonAnimation("horse");
})
$(".man").click(()=>{
    var man = new Audio("sounds/man.mp3");
    man.play();
    buttonAnimation("man");
})
$(".cow").click(()=>{
    var cow = new Audio("sounds/cow.wav");
    cow.play();
    buttonAnimation("cow");
})


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("after");

    setTimeout(() => {
        activeButton.classList.remove("after")
    }, 600);
}

