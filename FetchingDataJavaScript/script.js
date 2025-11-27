const teamMembers = [
  {
    name: "Olivia Bennett",
    position: "Motion Graphics Designer",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=80",
    description:
      "Olivia creates dynamic motion graphics, animated assets, and visually engaging brand storytelling.",
    tags: ["motion", "animation", "graphics", "after effects"],
  },
  {
    name: "Noah Mitchell",
    position: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    description:
      "Noah builds high-performance user interfaces with deep focus on responsiveness, accessibility, and clean code.",
    tags: ["html", "css", "javascript", "frontend"],
  },
  {
    name: "Isabella Reed",
    position: "Cloud Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    description:
      "Isabella architects cloud-native systems, manages deployments, and optimizes infrastructure for scalability.",
    tags: ["aws", "devops", "cloud", "infrastructure"],
  },
  {
    name: "Ava Thompson",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    description:
      "Ava is a creative designer specializing in user experience, visual design, and micro-interactions.",
    tags: ["design", "ui", "ux", "creativity"],
  },
  {
    name: "Liam Carter",
    position: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    description:
      "Liam builds scalable full-stack applications with expertise in React, Node.js, MongoDB, and DevOps.",
    tags: ["react", "node", "fullstack", "javascript"],
  },
  {
    name: "Sophia Martinez",
    position: "Data Scientist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    description:
      "Sophia works with AI/ML models, data visualization, and predictive analytics for enterprise solutions.",
    tags: ["machine learning", "python", "data science", "ai"],
  },
  {
    name: "Ethan Walker",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    description:
      "Ethan manages cross-functional teams, roadmaps, and product strategy with a customer-first mindset.",
    tags: ["product", "management", "strategy", "leadership"],
  },
  {
    name: "Mia Patel",
    position: "Cybersecurity Analyst",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    description:
      "Mia secures systems, performs penetration testing, and ensures compliance with global security standards.",
    tags: ["cybersecurity", "pentesting", "network", "security"],
  },
];


const main = document.querySelector("main");

teamMembers.forEach((elem) => {
  const tagHTML = elem.tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");

  main.innerHTML += `
        <div class="card">
            <img src="${elem.image}" alt="">
            <h2>${elem.name}</h2>
            <h3>${elem.position}</h3>
            <p>${elem.description}</p>

            <div class="tags-container">
                ${tagHTML}
            </div>
        </div>
    `;
});
