// bio JSON 
var bio = {
	"name" : "Roberto Zanchi",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "1234556",
		"email" : "r.zanchi@gmail.com",
		"github" : "robertozanchi",
		"twitter" : "@robertozanchi",
		"location" : "Berlin, Germany"
	},
	"welcomeMessage" : "Full stack web developer in training at Udacity. Passionate about solving societal and environmental problems, with eight years’ business consulting and non-profit experience in Asia and Europe.",
	"skills" : [
	"HTML5", "CSS3", "JavaScript", "Git/GitHub", "Python", "Swift", "SQL"
	],
	"pic" : "images/rz.jpg"
}

// bio function
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["pic"]);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);	
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);

    if (bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
        	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }

}

// work JSON
var work = {
  "jobs": [
    {
  	"employer" : "CDP (formerly Carbon Disclosure Project)",
  	"title" : "Technical Manager",
  	"dates" : "March 2014 - present",
  	"location" : "Berlin, Germany",
  	"description" : "Manage a technical working group of 8 experts to guide 50 multinational corporations on renewable energy options."
    },
    {
    "employer" : "The Indo-Italian Chamber of Commerce and Industry",
    "title" : "Project Manager",
    "dates" : "August 2011 - April 2012",
    "location" : "Mumbai, India",
    "description" : "Created opportunities for 20+ Italian SMEs, helping them to increase sales and launch joint ventures in India."
    },
    {
    "employer" : "ICICI Prudential Life Insurance Company",
    "title" : "Microinsurance Fellow",
    "dates" : "June 2010 - July 2011",
    "location" : "Guwahati, India",
    "description" : "Managed the production of a financial education campaign delivered to 10,000+ customers and family members."
    },
    {
    "employer" : "Intellecap",
    "title" : "Business Consultant",
    "dates" : "January 2007 - May 2010",
    "location" : "Hyderabad, India",
    "description" : "Developed business plans and growth strategies for pro-poor business models and social enterprises in India."
    }
  ]
}

// work function
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	    $(".work-entry:last").append(formattedDates);

	    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);

	}
}

// projects JSON
var projects = {
  "projects" : [
    {
    "title" : "Resume",
    "dates" : "2015",
    "description" : "A simple resume coded in HTML, CSS and JavaScript.",
    "images" : []
    },
    {
    "title" : "Linux Server Setup",
    "dates" : "2015",
    "description" : "Configured a baseline installation of Ubuntu Linux to host a Flask web application developed in Python.",
    "images" : []
    },
    {
    "title" : "Conference Organisation App API",
    "dates" : "2015",
    "description" : "Using Google App Engine's Endpoints API, built the Python backend to support a web- and Android-based application.",
    "images" : []
    },
    {
    "title" : "Catalog App",
    "dates" : "2015",
    "description" : "Developed a content management system using the Flask framework in Python.",
    "images" : []
    },
    {
    "title" : "Tournament Results Database",
    "dates" : "2015",
    "description" : "Built a PostgreSQL relational database scheme to store the results of a game tournament.",
    "images" : []
    },
    {
    "title" : "Movie Trailer Website",
    "dates" : "2015",
    "description" : "Server-side code in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL.",
    "images" : []
    }
  ]
}

// projects function
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project.images]) {
	    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

// education JSON
var education = {
	"schools": [
		{
			"name": "Imperial College London",
			"location": "London, UK",
			"degree": "Master of Science, Environmental Technology (Energy Policy)",
			"majors": ["Energy Policy"],
			"dates": "September 2013",
			"url": "http://www.imperial.ac.uk/"
		},
		{
			"name": "Bocconi University",
			"location": "Milan, Italy",
			"degree": "Master of Science, Economics and Management",
			"majors": ["Economics", "Management"],
			"dates": "December 2006",
			"url": "http://www.unibocconi.it"
		},
		{
			"name": "Bocconi University",
			"location": "Milan, Italy",
			"degree": "Undergraduate degree, Economics and Management",
			"majors": ["Economics", "Management"],
			"dates": "July 2004",
			"url": "http://www.unibocconi.it"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/nanodegrees"
		},
		{
			"title": "Full Stack Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		},
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		}
	],
};

// education function
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolLocation.replace("%data%", education.schools[school.majors]);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDegree);
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var onlineCourse = formattedCourse + formattedSchoolName
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates)
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
        $(".education-entry:last").append(onlineCourse);
        $(".education-entry:last").append(formattedDates);
        // $(".education-entry:last").append(formattedURL);
	}
}

// call bio, work, education, projects functions
bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
