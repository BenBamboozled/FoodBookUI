const tagContainer = $(".tag-container")
const input = $(".tag-container input")


let tags = [];


function createTag(label){
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML= label;
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class','fas fa-times');
  closeBtn.setAttribute('job','remove-tag');
  closeBtn.setAttribute('data-id',label);

  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
  
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}



$(document).on('keypress',function(e) {
  if(e.which == 13) {
      e.target.value.split(',').forEach(tag => {
      tags.push(tag); 
    });
      
    addTags();
    input.val("");
  }
});


document.addEventListener('click', function(e){
  
  const job = e.target.getAttribute('job');
  if(job=="remove-tag"){
    const value = e.target.getAttribute('data-id');
    const index = tags.indexOf(value);

    tags = [...tags.slice(0,index),...tags.slice(index + 1)];
    console.log(tags);

    addTags();
  
  }
})


$(document).ready(function () {

  $("i[job='menu']").click(function (event) {
    event.preventDefault();
    $(".desktopMenu").toggleClass("open");

  });


  $("i[job='make-search']").click(function (event) {
    event.preventDefault();

    newSearch = $("#search-bar-input").val();

    if (newSearch) {
      console.log(newSearch);
      $(".mobileSearch").toggleClass("open");
      $("#search-bar-input").blur();
      $("#search-bar-input").val(undefined);
    } else {
      $(".mobileSearch").toggleClass("open");
      $("#search-bar-input").focus();
    }
  });

  $("i[job='desktop-search']").click(function (event) {
    event.preventDefault();

    newSearch = $("#search-query").val();

    if (newSearch) {
      console.log(newSearch);
      $("#search-query").blur();
      $("#search-query").val(undefined);
    } else {
    }
  });


  $(".tag").click(function (event) {
    event.preventDefault();    

    const value = event.getAttribute('data-id');
    const index = tags.indexOf(value);

    tags = [...tags.slice(0,index),...tags.slice(index + 1)];
  });



});
