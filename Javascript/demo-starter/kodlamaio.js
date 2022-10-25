//HEADER
const title = "Kodlamaio";
const navbar = "Kariyer - Sık Sorulan Sorular - Giriş Yap - Kayıt Ol";
console.log(`${title}                          ${navbar}`);
console.log("----------------------------------------------------------");

//KATEGORİ
class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
  info() {
    console.log(this);
  }
}

const category1 = new Category(1, "Programlama");
category1.info(this);

console.log("----------------------------------------------------------");

//EĞİTMEN;

// class Instructor {
//   constructor(instructorId, instructorName, instructorLastName) {
//     this.instructorId = instructorId;
//     this.instructorName = instructorName;
//     this.instructorLastName = instructorLastName;
//   }
//   show() {
//     console.log(this);
//   }
// }

// const instructor1 = new Instructor(1, "Engin", "Demirog");
// instructor1.detail();

// console.log("----------------------------------------------------------");

function instructor(instructorId, instructorName, instructorLastName) {
  this.instructorId = instructorId;
  this.instructorName = instructorName;
  this.instructorLastName = instructorLastName;
}
instructor.prototype.show = function () {
  console.log(this);
};
const instructor1 = new instructor(1, "Engin", "Demirog");
instructor1.show();

console.log("----------------------------------------------------------");

//KURSLAR
class Course {
  constructor(id, name, category, instructor) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.instructor = instructor;
  }
  detail() {
    console.log(this);
  }
}

const course1 = new Course(1, "C#", "Programlama", "Engin Demirog");
const course2 = new Course(2, ".NET", "Programlama", "Engin Demirog");
const course3 = new Course(3, "JAVAT", "Programlama", "Engin Demirog");
const course4 = new Course(4, "JAVASCRİPT", "Programlama", "Engin Demirog");
const course5 = new Course(5, "JAVA+REACT", "Programlama", "Engin Demirog");
const course6 = new Course(6, "TEMEL", "Programlama", "Engin Demirog");
course1.detail();
course2.detail();
course3.detail();
course4.detail();
course5.detail();
course6.detail();
console.log("----------------------------------------------------------");

class CourseService {
  constructor(logger) {
    this.courses = [];
    this.logger = logger;
  }
  add(course) {
    this.courses.push(course);
    this.logger.log("Yeni Kurs Eklendi", courses);
  }
  list(filterCb) {
    console.log(
      filterCb !== undefined ? this.courses.filter(filterCb) : this.courses
    );
  }
}

class InstructorService {
  constructor(logger) {
    this.instructors = [];
    this.logger = logger;
  }
  add(instructor) {
    this.instructors.push(instructor);
    this.logger.log("Yeni Eğitmen Eklendi", instructors);
  }
  list(filterCb) {
    console.log(
      filterCb !== undefined
        ? this.instructors.filter(filterCb)
        : this.instructors
    );
  }
}

class CategoryService {
  constructor(logger) {
    this.categories = [];
    this.logger = logger;
  }
  add(category) {
    this.categories.push(category);
    this.logger.log("Yeni Kategori Eklendi", categories);
  }
  list(filterCb) {
    console.log(
      filterCb !== undefined
        ? this.categories.filter(filterCb)
        : this.categories
    );
  }
}
