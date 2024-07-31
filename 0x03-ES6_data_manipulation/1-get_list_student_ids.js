const getListStudentIds = (listStudents) => {
    let StudentId = [];
    if(!(listStudents instanceof Array)) {
        return StudentId;
    }
    StudentId = listStudents.map((student) => student.id);
    return StudentId;
};

export default getListStudentIds