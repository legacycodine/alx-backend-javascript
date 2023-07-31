const getStudentsByLocation = (students, city) => {
  const arratyObjec = students.filter((obj) => obj.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
