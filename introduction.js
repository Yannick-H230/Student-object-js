// 1. Création de l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// 2. Accès et modification des propriétés de l'objet
student.age = 21; // Changer l'âge à 21
student.grade = "A"; // Ajouter une nouvelle propriété grade

// 3. Travailler avec le tableau courses
student.courses.push("Math", "Physics", "Chemistry"); // Ajout des cours au tableau

// Utilisation de indexOf pour trouver l'index de "Physics"
let indexOfPhysics = student.courses.indexOf("Physics");

// Utilisation de slice pour obtenir les deux premiers éléments
let firstTwoCourses = student.courses.slice(0, 2);

// 4. Afficher les résultats dans la console
console.log("Objet student après modifications:", student);
console.log("Index de 'Physics':", indexOfPhysics);
console.log("Les deux premiers éléments du tableau courses:", firstTwoCourses);
