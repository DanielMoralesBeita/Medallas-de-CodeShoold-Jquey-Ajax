$(function() {

  $.ajax({
     
        url: 'https://rawgit.com/DanielMoralesBeita/Medallas-de-CodeShoold-Jquey-Ajax/master/assets/1789994.json',
    content: "application/json; charset=utf-8",
    success: function(data) { console.log(data);
      populateWithCourses(data[0].courses.completed)
    }});
});
  function populateWithCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

 
