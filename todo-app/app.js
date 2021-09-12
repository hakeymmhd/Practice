console.log("test links");

const toDoList = [];

const tdListener = () => {
    $('.done').click((e) => {        // why doesn't this work in Document.ready fn?
        console.log('the event type is: ' + e.type);
        console.log("triggertarget is: " + e.target);
        console.log("current target is: " + e.currentTarget);
        // e.stopPropagation();
        $(e.target).parent().appendTo('#completed'); 
    })
}

const render = (str, e) => {
    $('#tdl').empty();

    toDoList.forEach((i) => {
        const $newDiv = $('<div>').addClass('listItem');
        
        $newDiv.append(`<h2>${i}</h2>`);
        const $newButton = $('<button type="button" class="done">Completed!</button>');
        $newDiv.append($newButton);
        $('#tdl').append($newDiv);
        // $('<button type="button" class="test">test</button>').appendTo($newDiv);
    }) 
    tdListener();
}

$(() => {
    $('#submit').click((e) => {
        let str = $('#input-box').val();
        toDoList.push(str);
       render(str, e);
       $('#input-box').val('');
    }) 

    $('.hello').click((e) => {
        console.log('the event type is: ' + e.type);
        console.log("triggertarget is: " + e.target);
        console.log("current target is: " + e.currentTarget);
        // e.stopPropagation();
        $(e.target).appendTo('#completed'); 
    })

})