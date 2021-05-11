// let $button = $('#submit');
// let $movieTitle = $('#movie');
// let $movieRating = $('#rating');
// let $removeButton = $('<button>Remove</button>').addClass('remove');

// $button.on('click', function(e){
//     e.preventDefault();
//     if($movieRating.val() <= 10 && $movieTitle.val().length >= 2){
//     $('ol').append($(`<li>${$movieTitle.val()}: ${$movieRating.val()}/10   </li>`));
//     $('li').append($removeButton)
//     } else{
//         alert('Movie rating must be between 0.0 and 10.0 & movie title must have atleast 2 characters');
//     }
//     ///$('li').eq(index).append($removeButton)
//     $movieTitle.val('');
//     $movieRating.val('0');
    
// })

// $($removeButton).on('click', function(){
//     $($removeButton).parent().remove();
// })

let index = 0;
let $title = $('#movie');
let $rating = $('#rating');
let $removeButton = $('<button>Remove</button>').addClass('remove');

$('#submit').on('click', function(e){
    e.preventDefault();

    if($rating.val() <= 10 && $title.val().length >= 2){
        $('ol').append($(`<li>${$title.val()}: ${$rating.val()}/10   </li>`))
        $('li').append($removeButton);
    } else{
        alert('Movie rating must be between 0.0 and 10.0 & movie title must have atleast 2 characters');
    }

    index++; 
    
    $title.val('');
    $rating.val('');
})

$removeButton.on('click', function(e){
    e.preventDefault();

    $removeButton.parent().remove();
})
