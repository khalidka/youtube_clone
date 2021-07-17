var badge = ''
topics.forEach(topic =>{
 badge += `
 <div class="col-md-1">
   <a href="#"><span class="badge badge-md topicBadge" data-topic=${topic}>${topic}</span></a>
 </div>
 
 ` 
})
document.getElementById('topicsBadges').innerHTML = badge

let vidList = ''

function displayVideos(videos) {
  videos.forEach(list =>{
    vidList += `
    <div class="col-md-3">
      <div class="row">
      <div class="thumbnail">
      <img src=${list.link}
          alt="..." style="box-shadow: rgba(96,96,96,0.5 );">
      <div class="caption">
          <h3>${list.title}</h3>
          
      </div>
    </div>
      </div>
    </div>
   
    `
  })
  
  document.getElementById('videos').innerHTML = vidList
  vidList = ''
}

displayVideos(videoList)





document.querySelector('.searchBtn').addEventListener('click', ()=>{  
    var search = document.querySelector('#search')
    var filteredVideos = videoList.filter(function (video) {
      return video.title.toLowerCase().includes(search.value.toLowerCase())
    });
    displayVideos(filteredVideos)
  })

  document.querySelector('#search').addEventListener('keyup', (event) =>{
    if(event.keyCode == 13){
      document.querySelector('.searchBtn').click()
      console.log(search.value)
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('topicBadge')) {
      var filteredBadges = videoList.filter(function(video) {
          return video.topic.toLowerCase().includes(e.target.dataset.topic.toLowerCase())
        });
      displayVideos(filteredBadges) 
      if (e.target.dataset.topic === 'All') {
        displayVideos(videoList)
      }
    }
  })