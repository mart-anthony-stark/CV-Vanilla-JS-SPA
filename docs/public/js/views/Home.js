import ViewComponent from "./ViewComponent.js";

class Home extends ViewComponent {
  constructor() {
    super();
    this.setTitle("Home");
  }
  async render() {
    return `<main>
    <div class="sidebar">
        <div class="profile"></div>

        <div class="info">
            <h2>ABOUT ME</h2>
            <p><?php echo $bio ?></p>
            <div class="details">
                <?php foreach($personal_details as $d) {?>
                    <div class="personal-detail">
                        <h3><?php echo $d->detail ?><span>: <?php echo $d->value ?></span></h3>
                    </div>
                <?php } ?>
            </div>
        </div>

        <div class="links">
            <h2>CONTACT</h2>
        <?php
            foreach($social_links as $i => $i_value) {
                echo "<a href=$i_value->address target=_'blank'>
                <i class='fa $i_value->icon' aria-hidden='true'></i>
                    $i_value->linkname
                </a>";
            }
        ?>
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
                <?php
                    foreach($soft_skills as $x){
                        echo "<li>$x</li>";
                    }
                ?>
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
