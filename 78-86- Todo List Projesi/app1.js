

function filter(e){ // trim sag sol bosluk temizle
    const filterValue = e.target.value.toLowerCase().trim();// buyuk kucuk harf icin
    const todoListesi = document.querySelectorAll(".list-group-item");
    
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){ // icermek
                //
                todo.setAttribute("style","display : block");// ekranda gorunsun
            }else{
                todo.setAttribute("style","display : none !important");
            }
        });

    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır!");
    }

}