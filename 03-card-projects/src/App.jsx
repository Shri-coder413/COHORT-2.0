import React from 'react'
import Card from './components/card'

function App() {
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/uj2gXbNreILc2B-7b1VpzEnAREAuH3GlykAbpa6eGEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2L2Zm/LzcyLzM2ZmY3MmZj/OGQzMTBmMTM1M2Vj/YjJlNTg2MjI5NmFi/LmpwZw",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/x6OAHw5fXdbV9hk6c2Yb5dw2du5bGDpsKRPcDlngnQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNTk2OS81OTY5/MDQ2LnBuZw",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IHWEyt_j3vun7hSCD0HZ5oUVN3clHHj0HTASS1vrKzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4Pz4Gksja_VB-RqZFpbnazZsJhfPcmtWIN6BBCMYcqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U4LzY5/LzhhL2U4Njk4YWZm/NGVlMDFmNTIxNTc2/MWU0YWE3NzIzNGI4/LmpwZw",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/AL5uXpMxcEAprjdZM-ceLoeTviCbYJ_FD95hPvOl0cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnZpZGlhLmNvbS9j/b250ZW50L252aWRp/YUdEQy9lcy9lc19F/Uy9hYm91dC1udmlk/aWEvbGVnYWwtaW5m/by9sb2dvLWJyYW5k/LXVzYWdlL19qY3Jf/Y29udGVudC9yb290/L3Jlc3BvbnNpdmVn/cmlkL252X2NvbnRh/aW5lcl8zOTI5MjE3/MDUvbnZfY29udGFp/bmVyL252X2ltYWdl/LmNvcmVpbWcucG5n/LzE3MjIzMzA1MTUx/OTcvbnZpZGlhLWxv/Z28tdmVydC5wbmc",
    companyName: "Nvidia",
    datePosted: "3 days ago",
    post: "UI/Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DIks2Pgq-EmeOn_ma2tywF2ZhCMOflxT7OP4LJrIIco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    companyName: "Airbnb",
    datePosted: "1 month ago",
    post: "Web UI Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vGGqlfqEtyx1YgHjb8MKaw2o9zO3OUU1e3MTRIMfzMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvT3Jh/Y2xlLUxvZ28tUE5H/LUltYWdlLnBuZw",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem){
        return <Card company={elem.companyName} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} location={elem.location} />;
      })}
    </div>
  )
}

export default App
