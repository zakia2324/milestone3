var form = document.getElementById('resumeForm');
var resumePreview = document.getElementById('resumepreview');
var generateResumeBtn = document.getElementById('generateResume');
// function to generate resume preview
function generateResume(data) {
    resumePreview.innerHTML = "\n    <h2>".concat(data.name, "</h2>\n    <p><strong>Email</strong>").concat(data.email, "</p>\n     <p><strong>Education</strong>").concat(data.education, "</p>\n     <p><strong>ProfileSummary</strong>").concat(data.profileSummary, "</p>\n      <p><strong>Skills</strong>").concat(data.skills.join(','), "</p>\n       <p><strong>Experience</strong>").concat(data.experience, "</p>\n         ");
}
generateResumeBtn.addEventListener('click', function () {
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        education: formData.get('education'),
        profileSummary: formData.get('profileSummary'),
        skills: formData.get('skills').split(',').map(function (skill) { return skill.trim(); }),
        experience: formData.get('experience'),
    };
    generateResume(resumeData);
});
