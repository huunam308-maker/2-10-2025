let student = {
  name: "Nguyen Van A",
  age: 20,
  gender: "male",
  scores: {
    math: 8,
    english: 7,
    science: 9,
  },
};

console.log("Tên:", student.name);
console.log("Tuổi:", student.age);

let scores = student.scores;
let avg = (scores.math + scores.english + scores.science) / 3;
console.log("Điểm trung bình:", avg);

student.address = "Ha Noi";

delete student.gender;
