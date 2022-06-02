<template>
  <div class="dashboard">
    <div class="grid-container">
      <div class="menu-icon">
        <i class="fas fa-bars"></i>
      </div>

      <header class="header-dashboard">
        <div class="search">Search...</div>
        <div class="avatar">Your brand</div>
      </header>
      <aside class="sidenav">
        <div class="sidenav__close-icon">
          <i class="fas fa-times"></i>
        </div>

        <ul class="list">
          <li class="item">Option 1</li>
          <li class="item">Option 2</li>
          <li class="item">Option 3</li>
          <li class="item">Option 4</li>
          <li class="item">Option 5</li>
        </ul>
      </aside>
      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">Hello User</div>
          <div class="main-header__updates">Recent Items</div>
        </div>

        <div class="main-overview">
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card">Card</div>
          <div class="card">Card</div>
          <div class="card">Card</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Dashboard",
  methods: {},
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
}

.menu-icon {
  position: fixed;
  display: flex;
  top: 5px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
  background-color: #dadae3;
}

/* Give every child element its grid name */
.header-dashboard {
  grid-area: header;
  background-color: #00afc1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.header-dashboard .search,
.avatar {
  margin: 0 30px;
}

.header-dashboard .search {
  width: 300px;
  background-color: #fff;
  color: slategray;
  border-radius: 35px;
  padding: 10px 5px;
}

.sidenav {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  background-color: #0093ab;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  z-index: 2;
  transform: translateX(-245px);
  transition: all 0.6s ease-in-out;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.sidenav.active {
  transform: translateX(0);
}

.sidenav__close-icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}

/* Non-mobile styles for side nav responsiveness, 750px breakpoint */
@media only screen and (min-width: 700px) {
  .sidenav {
    position: relative; /* Fixed position on mobile */
    transform: translateX(0);
  }
}

.sidenav .list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}

.sidenav .list .item {
  padding: 20px 20px 20px 40px;
  color: #ddd;
}

.sidenav .list .item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  cursor: pointer;
}

.main {
  grid-area: main;
  background-color: #fff;
}

.main-header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 50px;
  height: 150px; /* Force our height since we don't have actual content yet */
  background-color: #e3e4e6;
  color: slategray;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
}

.main-overview {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(265px, 1fr)
  ); /* Where the magic happens */
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
}

.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #00aec123;
  color: slategray;
  font-weight: bold;
  border-radius: 15px;
}

.main-cards {
  column-count: 1;
  column-gap: 20px;
  margin: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #82bef6;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;
}

/* Force varying heights to simulate dynamic content */
.card:first-child {
  height: 485px;
}

.card:nth-child(2) {
  height: 200px;
}

.card:nth-child(3) {
  height: 265px;
}

@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid-container {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }

  .sidenav {
    display: flex;
    flex-direction: column;
  }
}

/* Medium-sized screen breakpoint (tablet, 1050px) */
@media only screen and (min-width: 65.625em) {
  /* Break out main cards into two columns */
  .main-cards {
    column-count: 2;
  }
}
</style>