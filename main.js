// Book Search
const ResultBox = document.getElementById('Result-box');
const ResulltNumber = document.getElementById('result-found');


const SearchBook = () => {
    const SearchInput = document.getElementById('search-input');
    const SearchInputValue = SearchInput.value;
    if (SearchInputValue === "") {
        ResultBox.innerHTML = "";
        ResulltNumber.innerHTML = ` Total Result Found : 0`
        return
    }
    else {
        SearchInput.value = "";
    
    const API = `https://openlibrary.org/search.json?q=${SearchInputValue}`;

    fetch(API)
        .then(res => res.json())
        .then(data => ShowResult(data));
    }
      
}
//  Result Part

const ShowResult = Data => {
    const Results = Data.docs;
    ResultBox.innerHTML = "";
    
    // Result Number
    
    ResulltNumber.innerHTML = ` Total Result Found : ${Data.num_found}`

    // Create Div
    const div = document.createElement('div');
    div.classList.add('col', 'mx-auto', 'w-75');
    
    if (Data.num_found === 0) {
        div.innerHTML = ` 
        <div class="card text-center w-75 mx-auto">
            <div class="card-header"> No Result Found</div>
            <div class="card-body">
                <h5 class="card-title">Search Again</h5>  
            </div>     
        </div>`;
        
        ResultBox.appendChild(div);
    }
    else {
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
    
        )
    }
}
    
       
    
    








