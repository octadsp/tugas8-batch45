// project-name
// start-date
// end-date
// project-description
// tech-1
// tech-2
// tech-3
// tech-4
// upload-image

//Buat variabel yang menampung data array secara universal
let projects = []
// Step 1 buat function menampung data hasil dari inputan project

const getProject = (event) => { //event adalah parameter yg dideklarasi sebagai event
    event.preventDefault()

    // bikin variabel nampung data inputan form
    let projectName = document.getElementById("project-name").value; // value ini adalah nilai dari semua data yg ada
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("project-description").value;
    let tech1 = document.getElementById("tech1")
    let tech2 = document.getElementById("tech2")
    let tech3 = document.getElementById("tech3")
    let tech4 = document.getElementById("tech4")
    let uploadImage = document.getElementById("upload-image").files;

    
    // if (projectName == '' || projectName == null){
    //     return alert('Project name is required')
    // } else if (startDate == '' || startDate == null){
    //     return alert('Date is required')
    // } else if (endDate == '' || endDate == null){
    //     return alert('Date is required')
    // } else if (description == '' ||description  == null){
    //     return alert('Description is required')
    // } else if (tech1 == false && tech2 == false && tech3 == false && tech4 == false){
    //     return alert('Technologies is required')
    // } else if (uploadImage.length == 0){
    //     return alert('Image is null')
    // }

    if (projectName == "") {
        return alert ("Project name is required")
    } else if (startDate == "") {
        return alert ("Date start is required")
    } else if (endDate == "") {
        return alert ("Date end is required")
    } else if (description == "") {
        return alert ("Description is required")
    } else if ( tech1.checked == '' && tech2.checked == '' && tech3.checked == '' && tech4.checked == '') {
        return alert ("Technologies is required")
    } else if (uploadImage.length == 0){
        return alert('Image is null')
    }
    
    // Mengubah spesifik dari image menjadi sebuah blob object
    uploadImage = URL.createObjectURL(uploadImage[0])

    // Statement untuk melihat Durasi dari endDate - startDate

    startDate = new Date(startDate);
    endDate = new Date(endDate);
        let duration = Math.floor((endDate - startDate) / (30 * 24 * 60 * 60 * 1000));
        if (duration > 0) duration = `${duration} month${duration > 1 ? "s" : ""}`;
        else {
            duration = Math.floor((endDate - startDate) / (7 * 24 * 60 * 60 * 1000));
            if (duration > 0) duration = `${duration} week${duration > 1 ? "s" : ""}`;
            else {
                duration = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));
                if (duration > 0) duration = `${duration} day${duration > 1 ? "s" : ""}`;
                else {
                    duration = Math.floor((endDate - startDate) / (60 * 60 * 1000));
                    if (duration > 0) duration = `${duration} hour${duration > 1 ? "s" : ""}`;
                    else {
                        duration = Math.floor((endDate - startDate) / (60 * 1000));
                        if (duration > 0) duration = `${duration} minute${duration > 1 ? "s" : ""}`;
                        else {
                            duration = Math.floor((endDate - startDate) / (1000));
                            if (duration > 0) duration = `${duration} second${duration > 1 ? "s" : ""}`;
                            else duration = "less than a day";
                        }
                    }
                }
            }
        }
        console.log(duration)

    // Bikin Variable untuk menampung data output
    let dataProject = {
        projectName,
        startDate,
        endDate,
        duration,
        description,
        tech1 : tech1.checked == true ? true : false,
        tech2 : tech2.checked == true ? true : false,
        tech3 : tech3.checked == true ? true : false,
        tech4 : tech4.checked == true ? true : false,
        uploadImage,
        // author: "octaadsp",
        // postedAt : new Date()
    }

    // Melakukan method PUSH untuk mengirimkan data
    projects.push(dataProject)
    showProject()
    console.log(projects)
}

const showProject = () => {
    document.getElementById("postProject").innerHTML =''
    
    for (let i = 0; i < projects.length; i++){
        document.getElementById("postProject").innerHTML += `
        <div class="card">
        <img src="${projects[i].uploadImage}" alt="post" />
        <h4>${projects[i].projectName}</h4>
        <span>durasi : ${projects[i].duration} </span>
        <p>${projects[i].description}</p>
        <div class="technologyIcon">
        ${projects[i].tech1 ? '<img src="./assets/images/js.png" alt="tech1">' : ''}
        ${projects[i].tech2 ? '<img src="./assets/images/go.png" alt="tech2">' : ''}
        ${projects[i].tech3 ? '<img src="./assets/images/python.png" alt="tech3">' : ''}
        ${projects[i].tech4 ? '<img src="./assets/images/figma.png" alt="tech4">' : ''}
        </div>
        <div class="action">
        <button>edit</button>
        <button>delete</button>
        </div>
        </div>`;
    }
    console.log(showProject)
}