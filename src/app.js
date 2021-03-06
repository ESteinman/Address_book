const renderContacts = () => {
    const storage = window.localStorage
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('.contact-list')

    if (contacts) {
        div.innerHTML = ''

        const ul = document.createElement('ul')
        contacts.forEach(contact => {
            let li = document.createElement('li')
            li.innerHTML = `
                <div class='card'>
                    <div class='content'>
                        <h1>${ contact.name }</h1>
                        <h2>${ contact.company }</h2>
                        <p>${ contact.notes }</p>
                        ${ contact.email } |
                        <a href='https//www.twitter.com/${ contact.twitter}'>@${ contact.twitter}</a>
                    </div>
                    <div class='image'> 
                    <img src='https://ca-address-book.herokuapp.com/images/pine.jpg' alt='Pines' height='175' width='263'/>
                </div>
                </div>    
            `
            ul.appendChild(li)
        })
    div.appendChild(ul)
    }   else {
        div.innerHTML = '<p>You have no contacts in your address book</p>'
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        const storage = window.localStorage

        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements 

        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        addContactForm.reset()
    })
})