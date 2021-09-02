// Book Search

const SearchBook = () => {
    const SearchInput = document.getElementById('search-input');
    const SearchInputValue = SearchInput.value;
    if (SearchInputValue === "") {
        SearchInput.value = "Input A Valid Name"
        return
    }
    else {
        SearchInput.value = "";
    
    const API = `http://openlibrary.org/search.json?q=${SearchInputValue}`;

    fetch(API)
        .then(res => res.json())
        .then(data => ShowResult(data));
    }
      
}
//  Result Part

const ShowResult = Data => {
    const Results = Data.docs;
    const ResultBox = document.getElementById('Result-box');
    ResultBox.innerHTML = "";
    
    // Result Number
    const ResulltNumber = document.getElementById('result-found');
    ResulltNumber.innerHTML = ` Total Result Found : ${Data.num_found}`

    Results.forEach(Result => {
        
        const div = document.createElement('div');
        div.classList.add('col');

       
        
             div.innerHTML = `
            <div class="card h-100">
                        <img src="https://covers.openlibrary.org/b/id/${Result.cover_i}-M.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${Result.title}</h5>
                                <p class="card-text fw-bold">Author Name : ${Result.author_name} </p>
                                <p class="card-text ">First Publish Date : ${Result.first_publish_year} </p>
                                <p class="card-text ">Publisher : ${Result.publisher} </p>
                            </div>
                            
                    </div>
        `;

        ResultBox.appendChild(div);
        }
       
    );
}








