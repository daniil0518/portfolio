const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My story <span data-number={1} />
        </h5>
        {/* quote */}
        <blockquote
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          From a curious coder to a seasoned Full Stack Developer, my journey in the world of technology has been nothing short of an exhilarating adventure. My story begins in a small room with a second-hand computer, where I wrote my first lines of code in C#. Those early days were filled with late nights and endless cups of coffee, as I delved into the intricacies of programming.
          <br /><br />
          As my skills grew, so did my passion for building complete solutions. I started experimenting with backend development, mastering C# and ASP.NET to create robust APIs and manage databases with SQL Server. My curiosity didn't stop there; I ventured into Python, utilizing Django and Flask to develop data-driven applications and streamline workflows through automation scripts.
          <br /><br />
          The frontend world called to me next. I learned React and Angular, building dynamic single-page applications that provided seamless user experiences. Vue's simplicity and flexibility won me over, and soon I was crafting reactive interfaces with ease. My mobile development skills flourished with React Native, allowing me to create cross-platform applications that felt right at home on both iOS and Android.
          <br /><br />
          Styling became an art form as I integrated Tailwind CSS, Bootstrap, and Material-UI into my projects, ensuring they were not only functional but also visually stunning. GSAP added a layer of dynamism, bringing my interfaces to life with engaging animations.
          <br /><br />
          As I honed my technical skills, I realized the importance of efficient deployment and scalability. I embraced DevOps, setting up CI/CD pipelines with Jenkins and GitHub Actions, and containerizing applications with Docker. Managing deployments with Kubernetes and leveraging cloud services like AWS and Azure became second nature.
          <br /><br />
          Throughout my journey, collaboration has been key. Working in agile teams, I’ve learned to value the diverse perspectives and skills of my colleagues, leading to innovative solutions and successful project deliveries. Continuous learning has been my compass, guiding me through the ever-evolving tech landscape.
          <br /><br />
          One project that stands out involved developing a comprehensive e-commerce platform. I led the backend development with Node.js and Express, ensuring secure and efficient transaction processing. On the frontend, I used React to create a responsive and intuitive user interface. Implementing a CI/CD pipeline, I automated testing and deployment, drastically reducing downtime and improving reliability. The project culminated in a seamless, high-performing application that delighted users and boosted sales.
          <br /><br />
          Looking back, my journey from a novice coder to a full-fledged Full Stack Developer has been fueled by a relentless drive to learn and innovate. Every challenge has been an opportunity to grow, and every project a chance to create something impactful. As I continue to navigate the vast sea of technology, I’m excited to tackle new challenges and build solutions that make a difference.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
