const feedPosts = [
  {
    id: "post_001",
    user: {
      username: "Aarav Mehta",
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video1.mp4",
    caption: "Exploring JavaScript animations today!",
    stats: { likeCount: 120, commentCount: 14, shareCount: 5 },
    userActions: { isLiked: false }
  },

  {
    id: "post_002",
    user: {
      username: "Priya Sharma",
      userImage: "https://randomuser.me/api/portraits/women/12.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video2.mp4",
    caption: "Frontend journey continues 🚀",
    stats: { likeCount: 242, commentCount: 32, shareCount: 12 },
    userActions: { isLiked: true }
  },

  {
    id: "post_003",
    user: {
      username: "Rohan Gupta",
      userImage: "https://randomuser.me/api/portraits/men/32.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video3.mp4",
    caption: "Practicing CSS Grid layouts!",
    stats: { likeCount: 310, commentCount: 40, shareCount: 18 },
    userActions: { isLiked: false }
  },

  {
    id: "post_004",
    user: {
      username: "Sneha Patel",
      userImage: "https://randomuser.me/api/portraits/women/45.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video4.mp4",
    caption: "New UI design inspiration ✨",
    stats: { likeCount: 189, commentCount: 11, shareCount: 4 },
    userActions: { isLiked: true }
  },

  {
    id: "post_005",
    user: {
      username: "Vikram Singh",
      userImage: "https://randomuser.me/api/portraits/men/15.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video5.mp4",
    caption: "Dark mode UI hits different!",
    stats: { likeCount: 400, commentCount: 55, shareCount: 22 },
    userActions: { isLiked: false }
  },

  {
    id: "post_006",
    user: {
      username: "Neha Verma",
      userImage: "https://randomuser.me/api/portraits/women/55.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video6.mp4",
    caption: "Debugging before sleep is dangerous 😂",
    stats: { likeCount: 520, commentCount: 72, shareCount: 30 },
    userActions: { isLiked: false }
  },

  {
    id: "post_007",
    user: {
      username: "Kunal Kumar",
      userImage: "https://randomuser.me/api/portraits/men/67.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video7.mp4",
    caption: "Mastering React Hooks today 🔥",
    stats: { likeCount: 610, commentCount: 85, shareCount: 44 },
    userActions: { isLiked: true }
  },

  {
    id: "post_008",
    user: {
      username: "Ananya Jain",
      userImage: "https://randomuser.me/api/portraits/women/20.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video8.mp4",
    caption: "New portfolio loading...",
    stats: { likeCount: 280, commentCount: 29, shareCount: 13 },
    userActions: { isLiked: false }
  },

  {
    id: "post_009",
    user: {
      username: "Harsh Vardhan",
      userImage: "https://randomuser.me/api/portraits/men/36.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video9.mp4",
    caption: "Practicing Node.js middleware patterns 🔧",
    stats: { likeCount: 198, commentCount: 25, shareCount: 10 },
    userActions: { isLiked: false }
  },

  {
    id: "post_010",
    user: {
      username: "Sara Ali",
      userImage: "https://randomuser.me/api/portraits/women/65.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video10.mp4",
    caption: "UI animations are addictive! 💫",
    stats: { likeCount: 355, commentCount: 41, shareCount: 15 },
    userActions: { isLiked: true }
  },

  {
    id: "post_011",
    user: {
      username: "Aditya Raj",
      userImage: "https://randomuser.me/api/portraits/men/40.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video11.mp4",
    caption: "Learning MERN stack step by step!",
    stats: { likeCount: 455, commentCount: 50, shareCount: 21 },
    userActions: { isLiked: true }
  },

  {
    id: "post_012",
    user: {
      username: "Kritika Sen",
      userImage: "https://randomuser.me/api/portraits/women/66.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video16.mp4",
    caption: "Deploying on Vercel feels satisfying 😌",
    stats: { likeCount: 322, commentCount: 34, shareCount: 17 },
    userActions: { isLiked: false }
  },

  {
    id: "post_013",
    user: {
      username: "Yash Gupta",
      userImage: "https://randomuser.me/api/portraits/men/77.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video13.mp4",
    caption: "Git merge conflicts: my old enemy 😭",
    stats: { likeCount: 625, commentCount: 90, shareCount: 33 },
    userActions: { isLiked: true }
  },

  {
    id: "post_014",
    user: {
      username: "Meera Nair",
      userImage: "https://randomuser.me/api/portraits/women/70.jpg",
      isFollowing: false
    },
    videoContent: "./reels/video14.mp4",
    caption: "CSS is magical if you treat it right ✨",
    stats: { likeCount: 410, commentCount: 49, shareCount: 20 },
    userActions: { isLiked: false }
  },

  {
    id: "post_015",
    user: {
      username: "Rudra Pratap",
      userImage: "https://randomuser.me/api/portraits/men/22.jpg",
      isFollowing: true
    },
    videoContent: "./reels/video15.mp4",
    caption: "Full-stack grind never stops 🚀",
    stats: { likeCount: 540, commentCount: 63, shareCount: 29 },
    userActions: { isLiked: true }
  }
];

const reels = document.querySelector(".all-Reels");


function addData(){
feedPosts.forEach((elem,idx)=>{
    
    reels.innerHTML  += `<div class="reel">
           <video autoplay loop muted src="${elem.videoContent}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.user.userImage}"
                  alt=""
                />
                <h4>${elem.user.username}</h4>
                <button>${elem.isFollowing?"Unfollow":"Follow"}</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
                <div id=${idx} class="like">
                    <h4 class="like-icon icons">${elem.userActions.isLiked?'<i class="ri-heart-fill red">':'<i class="ri-heart-line">'}</i></h4>
                    <h6>${elem.stats.likeCount}</h6>
                </div>
                <div class="comment">
                    <h4 class="comment-icon icons"><i class="ri-chat-1-line"></i></h4>
                    <h6>${elem.stats.commentCount}</h6>
                </div>
                <div class="share">
                    <h4 class="share-icon icons"><i class="ri-share-forward-line"></i></h4>
                    <h6>${elem.stats.shareCount}</h6>
                </div>
                <div class="menu">
                    <h4 class="menu-icon icons"><i class="ri-more-2-fill"></i></h4>
                    
                </div>
            </div>
          </div>`
    
}) 

}
addData();
reels.addEventListener("click",function(dets){
  console.log(feedPosts[dets.target.id]);
  
  if(!feedPosts[dets.target.id].userActions.isLiked){
    feedPosts[dets.target.id].stats.likeCount++;
    feedPosts[dets.target.id].userActions.isLiked = true;
  }else{
    feedPosts[dets.target.id].stats.likeCount--;
    feedPosts[dets.target.id].userActions.isLiked = false;
  }
  addData();
})