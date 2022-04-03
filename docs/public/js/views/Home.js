import ViewComponent from "./Component.js";

class Home extends ViewComponent {
  constructor() {
    super();
    this.setTitle("Home");

    this.personalDetails = [
      { key: "Age", value: "20" },
      { key: "Address", value: "Daet, Camarines Norte, Bicol" },
      { key: "Email", value: "martsalazar0@gmail.com" },
    ];

    this.socials = [
      {
        link: "https://www.linkedin.com/in/mart-anthony-salazar-420ba81b6/",
        text: "Mart Anthony Salazar",
        font: "fa-linkedin",
      },
      {
        link: "https://github.com/mart-anthony-stark",
        text: "mart-anthony-stark",
        font: "fa-github",
      },
      {
        link: "https://www.facebook.com/",
        text: "martanthony.abanosalazar",
        font: "fa-facebook",
      },
    ];
    this.softSkills = [
      "Time Management",
      "Patience",
      "Verbal and Written Communication",
      "Teamwork",
      "Flexibility",
      "Adaptability",
      "Analytical Skills",
    ];

    this.technicalSkills = [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 80 },
    ];
  }
  async render() {
    return `<main>
    <div class="sidebar">
        <div class="profile"></div>

        <div class="info">
            <h2>ABOUT ME</h2>
            <p><?php echo $bio ?></p>
            <div class="details">
                    ${this.personalDetails
                      .map(
                        (detail) =>
                          `<div class="personal-detail">
                        <h3>${detail.key}<span>: ${detail.value}</span></h3>
                    </div>`
                      )
                      .join("")}
            </div>
        </div>

        <div class="links">
            <h2>CONTACT</h2>
                ${this.socials
                  .map(
                    (social) => `<a href=${social.link} target=_'blank'>
                <i class=${social.font} aria-hidden='true'></i>
                    ${social.text}
                </a>`
                  )
                  .join("")}
        </div>
    </div>
    <div class="info">
        <div class="banner center">
            <div class="name">
                <h1><?php echo $name ?></h1>
                <h4><?php echo $profession?></h4>
            </div>
        </div>

        <section class="objective">
            <h2 class="heading">Career Objective</h2>
            <p><?php echo $career_objective ?></p>
        </section>
        
        <div class="two-cols">
        <section class="education">
            <h2 class="heading">Education</h2>
            <table>
                <tbody>
                    <tr>
                        <td class="year">2020 - present</td>
                        <td>BSIT - University of Camarines Norte(CNSC)</td>
                    </tr>
                    <tr>
                        <td class="year">2018</td>
                        <td>STEM strand - Camarines Norte Senior High School(CNSHS)</td>
                    </tr>
                    <tr>
                        <td class="year">2013</td>
                        <td>JHS - La Consolacion College of Daet(LCCD)</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="soft-skills">
            <h2 class="heading">Soft Skills</h2>
            <ul>
                    ${this.softSkills
                      .map((skill) => `<li>${skill}</li>`)
                      .join("")};
            </ul>
        </section>

        <section class="technical-skills">
            <h2 class="heading">Technical Skills</h2>
            <div class="skills-cont">
            <?php 
                foreach($technical_skills as $skill_val){
                ?>
                    <div class="card">
                        <h4 class="skill"><?php echo "<span>$skill_val->skill</span> <span>$skill_val->percent%</span>" ?></h4>
                        <div class="profficiency">
                            <span class="percent" 
                            style=<?php 
                                echo "width:$skill_val->percent%" 
                            ?>
                            ></span>
                        </div>
                    </div>
                <?php }?>
            </div>
        </section>
        </div>
        
    </div>
</main>`;
  }
}

export default Home;
