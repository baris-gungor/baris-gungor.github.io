<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  word-wrap: break-word !important;
  box-sizing: border-box !important;
  text-decoration: none !important;
}

body {
  background: rgb(255, 255, 255);
}

p {
  font-size: 0.7rem;
  font-family: "Quicksand", Arial, sans-serif;
}

.mainclass {
  max-width: 100%;
  padding: 0rem !important;
  /* width: 100%; */
}

.canvaspart .canvasbtn {
  padding: 6px;
  display: flex;
  background: white;
  color: rgba(0, 0, 0, 0.982);
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  /* border-radius: 6px; */
  transition: all 0.25s ease-in-out;
  box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 20%);
  border: none;
  position: fixed;
  z-index: 1;
  margin-left: 1rem !important;
  margin-top: 1rem;
}

.canvaspart .canvasbtn:hover {
  background: rgb(231, 231, 231) !important;
  /* border-radius: 10px; */
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
}

.canvaspart .canvasbtn:active {
  background: rgb(195, 195, 195) !important;
}

.offcanvas-header {
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow-y: auto;
  overflow-x: hidden;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 40% !important;
  border: none !important;
  transform: translateX(-100%);
}

.offcanvas-header .btn-close {
  padding: 1.3em 1.3em !important;
  margin: 0em 0em 0em 80% !important;
  color: rgba(0, 0, 0, 0.7);
  display: none;
}

.headerbg img {
  width: 85%;
  border-radius: 50%;
  margin-top: 0.5em;
}

.headerbg a {
  color: #2c98f0;
}

.navbutton {
  display: flex;
  flex-direction: column;

  margin: 0em 0em 1em 0em;
}

.navbutton button {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  background: transparent;
  border: none;
  padding: 10px 0px;
  /* margin: 5px 0px 5px 0px; */
  transition: all 0.15s ease-in-out;
  /* transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
  cursor: pointer;
  position: relative;
  text-decoration: none;
}

.navbutton button:hover {
  color: rgba(0, 0, 0, 0.7);
}

.navbutton button::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #2c98f0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.navbutton button:hover::before {
  transform: scaleX(1);
}

.navbutton button:focus {
  color: #2c98f0;
}

@media (min-width: 0px) and (max-width: 575px) {
  /* Smartphones 0-575*/
  .row {
    flex-direction: column;
  }
  .col {
    width: 100%;
  }
}

@media (min-width: 576px) and (max-width: 992px) {
  /* tablets 576-992 */
  .offcanvas-start {
    width: 30% !important;
  }
  .col {
    width: 50%;
  }
}

@media (min-width: 992px) and (max-width: 1400px) {
  /* pc 992-1400 */
  .offcanvas-start {
    width: 20% !important;
  }
  .col {
    width: 100%;
  }
}

@media (min-width: 1400px) {
  /* big screen 1400>.... */
  .mainclass {
    max-width: 60%;
    margin: 0px auto;
  }
  .col {
    width: 100%;
  }

  .offcanvas-start {
    width: 20% !important;
  }
}

@media (min-width: 1800px) {
  /*big screen 1400>....  */
  .mainclass {
    /* font-size: 24px !important; */
    max-width: 50%;
    margin: 0px auto;
  }
  .col {
    width: 100%;
  }
}

/* scrollbar */
::-webkit-scrollbar-track {
  --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  border-radius: 2px;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: transparent !important;
  margin-top: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(165, 165, 165);
  /* background-image: -webkit-gradient(linear,
left bottom,
left top,
color-stop(0.80, rgb(219, 219, 219)),
color-stop(0.50, rgb(160, 160, 160)),
color-stop(0.10, rgb(109, 109, 109)));
*/
}

/* scrollbar */
</style>
