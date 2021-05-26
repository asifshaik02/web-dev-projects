function search(ele) {
    if (event.key === 'Enter') {
        query = ele.value;
        apikey = "591e06fe"
        url = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apikey}&plot=full`

        cont = document.getElementById('content')

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.Response !== 'False') {
                    document.querySelector('.main').style.backgroundImage = 'none'
                    cont.innerHTML =
                        `<div class="img">
                            <img src="${data.Poster}" alt="poster">
                         </div>
                        <div class="details">
                            <ul>
                                <li><span>Title:</span> ${data.Title}</li>
                                <li><span>Year:</span> ${data.Year}</li>
                                <li><span>Release:</span> ${data.Released}</li>
                                <li><span>Genre:</span> ${data.Genre}</li>
                                <li><span>Actors:</span> ${data.Actors}</li>
                                <li><span>Rating:</span> ${data.imdbRating}</li>
                            </ul>
                            <a href="https://www.imdb.com/title/${data.imdbID}/?ref_=fn_al_tt_1" target="_blank" class="btn">IMDB</a>
                        </div>
                        <div class="plot">
                            <h4>Plot</h4>
                            <p>${data.Plot}</p>
                        </div>`
                }
                else{
                    cont.innerHTML = '<h3>uh-oh! Title not found :(</h3>'
                    document.querySelector('.main').style.backgroundImage = 'url(imgs/bg.svg)'

                }

            })
            .catch()
    }

}

