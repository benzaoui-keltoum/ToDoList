

        
    
        
        // Read the code for modifie the delete icon
      


        let p=0;

function aff(event){

    var empt = document.forms["form1"]["firstnote"].value;
//if text is empty alert 
    if (empt === ""){
   alert("Please put a Value");
    }
    else{

   // Creating a new div element
var newDiv = document.createElement('div');
        // Create an "input" node:
        // and style to it
    const node = document.createElement("input");
    node.style.width='59%';
    node.style.padding='20px';
    node.style.margin='8px';
    node.style.display='inline-block';
    node.style.borderRadius='4px';
    node.style.boxSizing='border-box';
    node.style.border='1px';
    node.value=empt;
   // add type and name <input type="text" id="snote" name="sndnote" placeholder="Your second note..">
    node.type="text";
    node.name="frfrgt";
    node.placeholder="You note here";

    // Add delte icon
var dele = document.createElement('i');
dele.className='glyphicon glyphicon-trash';
dele.id="i"+p;
console.log(dele.id)
p++;

//add icone and  input to div
    newDiv.appendChild(node);	
    newDiv.appendChild(dele);	
    event.preventDefault();

//add div to form
    document.getElementById("fo").appendChild(newDiv);


    }
  
}

function delet(i){

    i.parentElement.remove();

}


document.addEventListener=('click',delet(this));
