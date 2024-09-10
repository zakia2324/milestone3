const form = document.getElementById('resumeForm')as HTMLFormElement;
const resumePreview=document.getElementById('resumepreview')as HTMLDivElement;
const generateResumeBtn=document.getElementById('generateResume') as HTMLButtonElement;

interface ResumeData{
    name:string;
    email:string;
    education:string;
    profileSummary:string;
    skills:string[];
    experience:string;
}
// function to generate resume preview

function generateResume(data:ResumeData){
    resumePreview.innerHTML=`
    <h2>${data.name}</h2>
    <p><strong>Email</strong>${data.email}</p>
     <p><strong>Education</strong>${data.education}</p>
     <p><strong>ProfileSummary</strong>${data.profileSummary}</p>
      <p><strong>Skills</strong>${data.skills.join(',')}</p>
       <p><strong>Experience</strong>${data.experience}</p>
         `;
}
generateResumeBtn.addEventListener('click',()=>
    {
    const formData = new FormData(form);
    const resumeData:ResumeData={
        name:formData.get('name')as string,
        email:formData.get('email')as string,
        education:formData.get('education')as string,
        profileSummary:formData.get('profileSummary')as string,
        skills:(formData.get('skills')as string).split(',').map(skill=>skill.trim()),
        experience:formData.get('experience')as string,
    };

    generateResume(resumeData);
    
});