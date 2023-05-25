<template>
  <div class="home">
    <div class="mainclass">
      <div id="about" class="contentitem margintop">
        <h2>ABOUT ME</h2>
        <p>
          {{ database.aboutInfo }}
        </p>
      </div>

      <div id="skills" class="contentitem">
        <h2 style="font-weight: 300">My Contacts</h2>
        <div class="row">
          <div class="col">
            <div class="expertisebox" style="background: #330063">
              <svg-icon type="mdi" :path="githubSVG"></svg-icon>
            </div>
            <h6>
              <a href="https://github.com/baris-gungor" target="_blank"
                >GitHub</a
              >
            </h6>
            <p>You can see some of my projects here.</p>
          </div>
          <div class="col">
            <div class="expertisebox" style="background: #0a66c2">
              <svg-icon type="mdi" :path="linkedInSVG"></svg-icon>
            </div>
            <h6>
              <a
                href="https://www.linkedin.com/in/gungor-baris/"
                target="_blank"
                >LinkedIn</a
              >
            </h6>
            <p>
              Here is my LinkedIn profile. You can learn lots of things about
              me.
            </p>
          </div>
          <div class="col">
            <div class="expertisebox" style="background: rgb(96, 236, 83)">
              <svg-icon type="mdi" :path="emailSVG"></svg-icon>
            </div>
            <h6>
              <a href="mailto:barisgungormail@gmail.com" target="_blank"
                >Mail</a
              >
            </h6>
            <p>barisgungormail@gmail.com</p>
          </div>
        </div>
      </div>

      <div id="experience" class="expitem">
        <div class="expinfo">
          <h2>My Experiences</h2>
          <div class="imgNdesc" v-for="item in database.experience" :key="item">
            <img :src="item.url" alt="" />
            <p>
              {{ item.company }} <br />
              {{ item.date }}
            </p>
          </div>
        </div>
      </div>

      <div id="education" class="expitem">
        <div class="eduinfo">
          <h2>My Education</h2>
          <div class="imgNdesc" v-for="item in database.education" :key="item">
            <img :src="item.url" alt="" />
            <p>
              {{ item.company }} <br />
              {{ item.date }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import db from "../assets/db";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiDatabaseOutline, mdiLinkedin, mdiEmailOutline } from "@mdi/js";

export default {
  data() {
    return {
      database: "",
      githubSVG: mdiDatabaseOutline,
      linkedInSVG: mdiLinkedin,
      emailSVG: mdiEmailOutline,
    };
  },
  components: {
    SvgIcon,
  },
  mounted() {
    this.database = db[0];
  },
};
</script>

<style lang="scss">
.mainclass {
  display: flex;
  /* text-align: start; */
  /* margin: 0px auto !important; */
  flex-direction: column;
  align-items: center;
}

.margintop {
  padding-top: 3% !important;
}

.contentitem {
  position: relative;
  max-width: 90%;
}

#about h2 {
  margin: -0.2em 0em 0.4em 0em;
  font-weight: 400;
}

#about p {
  max-width: 100%;
  color: rgb(92, 92, 92);
}

.expitem {
  position: relative;
  padding: 2em 0em 1em 0em;
  width: 90%;
}

.expitem h2 {
  margin: 0em 0em 0.3em 0em;
  font-weight: 400;
}

.expitem p {
  font-size: 1.2rem;
  margin: 0em 0em 0em 1em;
  max-width: 100%;
  color: rgb(92, 92, 92);
}

#etiya {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.expinfo {
  grid-column: span 10;
}

#gau {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.eduinfo {
  grid-column: span 10;
}
.imgNdesc {
  display: flex;
  align-items: center;
  margin: 1em 0em 0em 0em;
  img {
    width: 16%;
  }
}

.contentitem p {
  font-size: 18px;
  font-weight: 200;
  color: rgb(92, 92, 92);
}

.contentitem h3 {
  margin: 0.2em 0em 1em 0em;
  font-weight: 400;
}

.contentitem h6 {
  margin: 4px 0px 20px 0px;
  font-size: 22px;
}

.row {
  display: flex;
  margin: 0em 0em 0em 0em !important;
  padding: 0em 0em 0em 0em !important;
}

.col {
  padding: 1em 1em !important;
  margin: 1em 0.5em 1em 0.5em !important;
  text-align: center;
  box-shadow: 0 0 6px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* justify-content: center; */
}

.expertisebox {
  color: whitesmoke;
  margin-top: 0em;
  margin-bottom: 0.5em;
  padding: 1em;
  height: 6em;
  width: 6em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.workitem {
  position: relative;
  padding: 4em 2em;
  max-width: 90%;
}

.workitem p {
  font-size: 18px;
  font-weight: 200;
  color: rgb(92, 92, 92);
}

.workitem h3 {
  margin: 0.2em 0em 1em 0em;
  font-weight: 400;
}

.workitem h6 {
  margin: 4px 0px 20px 0px;
  font-size: 22px;
}
#contact {
  width: 90%;
}
.conitem {
  position: relative;
  // padding: 3em 1em;
  max-width: 90%;
}

.conitem h2 {
  font-weight: 400;
}

.conitem p {
  margin: 0.5em 0em 0em 0em;
  font-size: 1.2rem;
  width: 100%;
  color: rgb(92, 92, 92);
}
</style>
