const getStudentsByLocation = (studentlist, city) => {
  return studentlist.filter((student) => student.location === city);
}

export default getStudentsByLocation;