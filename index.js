const addEntry = document.querySelector('#entry-form');
let entryLinkArr = [];
let entryDivArr = [];
let count = 1;
addEntry.addEventListener('submit',createEntry)

function createEntry(){
    const entryField =  document.querySelector('#entry-textbox');
    const entryText = document.querySelector('#entry-textbox').value;
    const  entryContainer = document.querySelector('#entry-container');
    const  entryDate = document.querySelector("#entry-date").value;

    



    let entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-div');
    entryContainer.append(entryDiv);

    let dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div')
    let entryId = "e"+ entryDate + count;
    entryDiv.setAttribute('id',entryId);
    dateDiv.textContent = entryDate;
    entryDiv.appendChild(dateDiv)

    let textDiv = document.createElement('div');
    textDiv.classList.add('text-div');
    textDiv.textContent = entryText;
    entryDiv.appendChild(textDiv);
    let removeImg = document.createElement('img');
    removeImg.setAttribute('src','times-circle-regular.svg');
    removeImg.setAttribute('alt','remove entry');
    removeImg.classList.add('remove-img');
    entryDiv.appendChild(removeImg);

        let entryLink = document.createElement('a');
        entryLink.classList.add('entry-link');
        let entryRef = '#' + 'e' + entryDate + count;
        entryLink.href = entryRef;
        let linkName = entryDate
        entryLink.textContent = linkName;
        let navContainer = document.querySelector('#entry-nav');
        
        navContainer.appendChild(entryLink);
        entryDivArr.push("#" + entryId);
    entryLinkArr.push(entryRef);
   
    clearTextArea()
}
    





function clearTextArea(){
    document.querySelector('#entry-form').reset();
    count += 1;
    let LinksHeader = document.querySelector('h2');
    LinksHeader.style.visibility = "visible";
}









