export const sortStudents = (students) => {

    const sortingHandler = (a, b) => (
        b.grade - a.grade ||
        a.age - b.age ||
        a.name.localeCompare(b.name)
    );

    return students.sort(sortingHandler);
}