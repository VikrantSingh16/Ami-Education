import React from 'react'

function Placement() {
  return (
    <div>
<div>
    <h1>
        Companies list 
    </h1>
    <h6>Explore & compare</h6>
</div>
<div>
<iframe style={{margin:"5px",borderRadius:"20px"}} src="https://www.scimagoir.com/rankings.php?area=1700&sector=Private" width={1200} height={380}></iframe>
</div>

<div>
<h1>
        Competitions
    </h1>
    <h6>Compete & win</h6>
</div>
<div>
<iframe style={{margin:"5px",borderRadius:"20px"}} src="https://www.hackerearth.com/challenges/" width={1200} height={280}></iframe>
</div>


<div>
<h1>
        Courses
    </h1>
    <h6>Learn & Grow</h6>
</div>
<div>
<iframe style={{margin:"5px",borderRadius:"20px"}} src="https://www.udemy.com/" width={1200} height={280}></iframe>
</div>

    </div>
  )
}

export default Placement