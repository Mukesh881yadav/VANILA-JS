const addbtn=document.querySelector("#add_btn");
const maincontianer=document.querySelector('.todo-container')
      addbtn.addEventListener('click',()=>{
        const getinput=document.querySelector("#input-fld").value
        const createElement=document.createElement('div')
        createElement.classList="data_con"
        const cancelbtn=document.createElement('p')
        cancelbtn.append("Remove")
         cancelbtn.classList.add("remove_data")
        const edit=document.createElement('p')
        edit.append("Edit")
        edit.classList.add("edit_data")
        createElement.innerHTML=getinput;
        const data=maincontianer.append(createElement)
        createElement.append(cancelbtn)
        createElement.append(edit)
        const removeclasslist=document.querySelector('.remove_data')
        console.log( removeclasslist);
        removeclasslist.addEventListener("click",()=>{
            console.log("remove data");
            createElement.classList.add("remove_allblock")
        })
      })