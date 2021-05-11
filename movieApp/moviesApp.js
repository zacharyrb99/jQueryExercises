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
let movies = [];

$(function(){
$('.form').on('submit', function(e){
    e.preventDefault();
    if($('#movie').val().length >= 2){
        let $title = $('#movie').val();
        let $rating = $('#rating').val();

        let movieValues = {$title, $rating, index};
        const html = createHTML(movieValues);

        index++;
        movies.push(movieValues);
        $('ol').append(html);
    }else{
        alert('movie title must be more than 2 characters')
    }

    $('#movie').val('');
    $('#rating').val('');
});

$('ol').on('click', '.remove', function(e){
    //e.preventDefault();
    let movieIndex = movies.findIndex(function(movie){ 
        movie.index === +$(e.target).data('movieId');
    })    

    //movies.splice(movieIndex, 1);
    delete movies[movieIndex];

    $(e.target).closest('li').remove();
})

$('#sort').on('click', function(e){
    e.preventDefault();

    let sorted = movies.sort((a,b) => (a.$rating < b.$rating) ? 1 : -1);
    $('ol').empty();

    for(let movie of sorted){
        const html = createHTML(movie);
        $('ol').append(html);
    }
})
});

function createHTML(values){
    return `<li>
                <b>${values.$title}: ${values.$rating}/10</b>
                <button class = "remove" data-movie-id = ${values.index}> Remove </button> 
            </li>`
}