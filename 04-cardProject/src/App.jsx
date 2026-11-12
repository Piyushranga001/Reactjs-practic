import React from 'react'
import Card from './components/Card'

const App = () => {


const jobs = [
  {
    id: 1,
    companyName: "Google",
    jobRole: "Frontend Developer Intern",
    postedDate: "2 days ago",
    tag1: "Internship",
    salary: "₹40,000/month"
  },
  {
    id: 2,
    companyName: "Microsoft",
    jobRole: "Software Engineer",
    postedDate: "1 week ago",
    tag1: "Full-time",
    salary: "₹12 LPA"
  },
  {
    id: 3,
    companyName: "Amazon",
    jobRole: "SDE Intern",
    postedDate: "3 days ago",
    tag1: "Internship",
    salary: "₹50,000/month"
  },
  {
    id: 4,
    companyName: "Meta",
    jobRole: "React Developer",
    postedDate: "5 days ago",
    tag1: "Full-time",
    salary: "₹15 LPA"
  },
  {
    id: 5,
    companyName: "Adobe",
    jobRole: "UI Developer Intern",
    postedDate: "1 day ago",
    tag1: "Internship",
    salary: "₹35,000/month"
  },
  {
    id: 6,
    companyName: "Netflix",
    jobRole: "Backend Developer",
    postedDate: "4 days ago",
    tag1: "Full-time",
    salary: "₹18 LPA"
  },
  {
    id: 7,
    companyName: "Flipkart",
    jobRole: "Full Stack Developer",
    postedDate: "6 days ago",
    tag1: "Full-time",
    salary: "₹10 LPA"
  },
  {
    id: 8,
    companyName: "TCS",
    jobRole: "Graduate Engineer Trainee",
    postedDate: "2 weeks ago",
    tag1: "Full-time",
    salary: "₹4 LPA"
  },
  {
    id: 9,
    companyName: "Infosys",
    jobRole: "Web Developer Intern",
    postedDate: "3 days ago",
    tag1: "Internship",
    salary: "₹20,000/month"
  },
  {
    id: 10,
    companyName: "Wipro",
    jobRole: "Junior Software Developer",
    postedDate: "1 week ago",
    tag1: "Full-time",
    salary: "₹5 LPA"
  }
];

  return (
    <div>
      {jobs.map(function(params) {
        return <Card companyName={params.companyName} jobRole = {params.jobRole} postedDate={params.postedDate} tag1={params.tag1} salary={params.salary} />
      })}
    </div>
  )
}

export default App
