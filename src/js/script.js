const defaultArray = [
    { name: 'John', age: 21, grade: 90 },
    { name: 'Jane', age: 20, grade: 85 },
    { name: 'Alice', age: 22, grade: 90 },
    { name: 'Bob', age: 20, grade: 80 },
    { name: 'David', age: 21, grade: 85 }
];

const form = document.querySelector('.students-form');
form.elements.students.value = JSON.stringify(defaultArray);
const list = document.querySelector('.students-list');

const sortingHandler = (a, b) => (
    b.grade - a.grade ||
    a.age - b.age ||
    a.name.localeCompare(b.name)
);

const onFormSubmit = event => {
    event.preventDefault();
    let students;
    try {
        students = JSON.parse(event.target.elements.students.value);
        const isValid = students.every(student => ('name' in student && 'age' in student && 'grade' in student));
        if (!isValid) throw new Error;
    } catch (e) {
        return alert('Введіть валідний масив студентів!');
    }
    const markup = students.sort(sortingHandler).map(({ name, age, grade }) => {
        return `<li><p class="item"> Name: ${name}, Age: ${age}, Grade: ${grade}</p></li>`;
    })
        .join('')
    list.innerHTML = markup;
};

form.addEventListener('submit', onFormSubmit);
