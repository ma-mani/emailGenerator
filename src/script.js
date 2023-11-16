// generate Email

const newUser = {
    firstName: 'Jane',
    lastName: 'Doe',
};

function generateEmail(object) {
    const firstName = object.firstName.toLowerCase();
    const lastName = object.lastName.toLowerCase();
    return `${firstName}.${lastName}@example.com`;
}

const email = generateEmail(newUser);
console.log(email);

// ---------------------------------------------------------

function getUserFromEmail(email) {
    if (!email.includes('@')) {
        return null;
    }
    if (email.includes('.')) {
        const normalizedEmail = email.toLowerCase().trim();
        const splitNames = normalizedEmail.split('@').shift().split('.');
        const nameObject = Object.assign({}, splitNames);
        const nameObjectCorrect = {
            firstName: nameObject['0'],
            lastName: nameObject['1'],
        };
        return nameObjectCorrect;
    } else {
        return null;
    }
}

console.log(getUserFromEmail('JANE.doe@examplecom'));

const form = document.querySelector('[data-js="form"]');

const resultOutput = document.querySelector('[data-js="generated-email"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (!data.firstName && !data.lastName) return;
    console.log(data.firstName);

    const email = {firstName: data.firstName, lastName: data.lastName};

    resultOutput.textContent = generateEmail(email);
});

const form2 = document.querySelector('[data-js="form2"]');

const resultOutput2 = document.querySelector('[data-js="generated-Object2"]');

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (!data.email) return;
    console.log(data.email);

    const fullName = getUserFromEmail(data.email);

    const firstName =
        fullName.firstName.charAt(0).toUpperCase() +
        fullName.firstName.slice(1);
    const lastName =
        fullName.lastName.charAt(0).toUpperCase() + fullName.lastName.slice(1);

    resultOutput2.textContent = `${firstName} ${lastName}`;
});
