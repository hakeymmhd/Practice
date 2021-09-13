console.log("test links");

const toDoList = [];

const pushDone = () => {
    $('.done').click((e) => {        // why doesn't this work in Document.ready fn?
        console.log('the event type is: ' + e.type);
        console.log("triggertarget is: " + e.target);
        console.log("current target is: " + e.currentTarget);
        const deletedIndex = $(e.target).parent().index();
        // e.stopPropagation();
        $(e.target).parent().appendTo('#completed');
        toDoList.splice(deletedIndex, 1);
        // console.log($(e.target)); 
        // const findList = $('#tdl')
        
        // console.log(str);
        // console.log(toDoList.indexOf(str));
        // render();
    })
    
}

const render = (str, e) => {
    $('#tdl').empty();
    const $newOL = $('<ol>').addClass('listItem');

    toDoList.forEach((i) => {
        const $newItem = $(`<li>${i}</li>`);
        $newOL.append($newItem);
        const $newButton = $('<button type="button" class="done">Completed!</button>');
        $newItem.append($newButton);
        $('#tdl').append($newOL);
        // $('<button type="button" class="test">test</button>').appendTo($newDiv);
    }) 
    pushDone();
}

$(() => {
    $('#submit').click((e) => {
        let str = $('#input-box').val();
        toDoList.push(str);
       render(str, e);
       $('#input-box').val('');
    }) 

    // $('.hello').click((e) => {
    //     console.log('the event type is: ' + e.type);
    //     console.log("triggertarget is: " + e.target);
    //     console.log("current target is: " + e.currentTarget);
    //     // e.stopPropagation();
    //     $(e.target).appendTo('#completed'); 
    // })

})