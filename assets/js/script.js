
// BUAT FUNCTION

function getData(){
    let name = document.getElementById("name").value //.value hanya bisa digunakan untuk data yang berisikan nilai inputan
    let email = document.getElementById("email").value //.value hanya bisa digunakan untuk data yang berisikan nilai inputan
    let phone = document.getElementById("phone").value //.value hanya bisa digunakan untuk data yang berisikan nilai inputan
    let subject = document.getElementById("subject").value //.value hanya bisa digunakan untuk data yang berisikan nilai inputan
    let message = document.getElementById("message").value //.value hanya bisa digunakan untuk data yang berisikan nilai inputan


    // PERKONDISIAN UNTUK VALIDASI FORM
    if (name == "") {
        return alert ("name cannot be empty ")
    } else if (email == "") {
        return alert ("email cannot be empty")
    } else if (phone == "") {
        return alert ("phone number cannot be empty")
    } else if (subject == "") {
        return alert ("select one of the subjects")
    } else if (message == "") {
        return alert ("message cannot be empty")
    } 

    // Perintah Pengiriman Email
    const emailReceiver = "rhomairama.dev@gmail.com" // Emailnya dikirim ke siapa

    // Perintah untuk proses Automatic Nulis Isi Email
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${subject} with me asap ` // isi dari email yang ingin dikirimkan
    a.click() // perintah agar dapat melaunch apps email


    let data = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(data)

    // console.log(name)
    // console.log(email)
    // console.log(phone)
    // console.log(subject)
    // console.log(message)
}

let buttons = document.querySelectorAll('a');