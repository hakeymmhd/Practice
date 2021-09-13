console.log("test links");

const toDoList = [];

const removeItem = () => {
    $('#clearList').click((e) => {
        $('.completedList').empty();
    })
}

const pushDone = () => {
    $('.done').click((e) => {        // why doesn't this work in Document.ready fn?
        // console.log('the event type is: ' + e.type);
        // console.log("triggertarget is: " + e.target);
        // console.log("current target is: " + e.currentTarget);
        const deletedIndex = $(e.target).parent().index();
        $(e.target).parent().appendTo('.completedList');
        toDoList.splice(deletedIndex, 1); //updates array
        $(e.target).attr('class', 'remove').text('Remove'); //changes the class of button but listener sees it as old one
        $(e.target).remove();
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
           
    }) 
    $('#tdl').append($newOL);
    pushDone();
}

$(() => {
    $('#submit').click((e) => {
        let str = $('#input-box').val();
        toDoList.push(str); //updates array
       render(str, e);
       $('#input-box').val('');
    }) 

    removeItem();
    
})