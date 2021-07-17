let videoList = [
    {
      title: 'React Native Crash Course',
      link: "http://slidetodoc.com/presentation_image_h/d954a088be17f88cf007430ab3641805/image-1.jpg",
      topic: 'React Native'
    },
    {
      title: 'Full Stack React & Django',
      link: "data:image/jpeg;base64,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",
      topic: 'Full Stack React & Django'
      
    },
    {
      title: 'React <br> Crash Course',
      link: "http://slidetodoc.com/presentation_image_h/d954a088be17f88cf007430ab3641805/image-1.jpg",
      topic: 'React'
    },
    {
      title: 'Python & MySQL Crash Courses',
      link: "https://i.ytimg.com/vi/BHwgnGEhYG8/maxresdefault.jpg",
      topic: 'Python & MySQL'
    },
    {
      title: '<br>Java Tutorials For Beginners',
      link: "data:image/jpeg;base64,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",
      topic: 'Java'
    },
    {
      title: '<br>Building iOS/Android <br> App',
      link: "https://i.ytimg.com/vi/1ukSR1GRtMU/maxresdefault.jpg",
      topic: 'Flutter'
    },
    {
      title: '<br>Learn Django Tutorial ',
      link: "https://i.ytimg.com/vi/2BqoLiMT3Ao/maxresdefault.jpg",
      topic: 'Django'
    },
  
    {
      title: '<br>Python Tutorials-[Full Course]',
      link: 'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg',
      topic: 'Python'
    },
  
  ]


  
let topics = [
    'All', 'React Native ', 'Javascript ', 'React', ' Python ', ' Java',  'Django', 'Flutter',   
  ]