//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate { // Declare a class
    constructor(name, mass, scores) { // Three parameters
      this.name = name;
      this.mass = mass;
      this.scores = scores;

      // addScore method allows new score as parameter
      addScore(newScore) {
        this.scores.push(newScore); // adds this value when score is passed
     } 
    }
  }

  //Given objects that includes name, mass, test scores
  let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
  let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
  let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

  //console.log verifies that objects containing the class assigns name, mass, test scores
  console.log(bubbaBear);
  console.log(merryMaltese);
  console.log(gladGator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83); // add 83 to Bubba Bear's record
console.log(bubbaBear.scores); // Print the new score array


  average() {
    let total = this.scores.reduce((a, b) => a + b, 0);
    return (total / this.scores.length).toFixed(1); // toFixed(1) to round to one decimal place. Divide sum by number scored
  }

  //Print Merry Maltese's average test
  console.log(merryMaltese.average());
checkAdmission() {
    let average = this.averageScore();
    return average >= 80 ? 'Candidate admitted' : 'Candidate rejected';
  }


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.