<template>
  <main class="welcome">
    <div class="welcome__background"></div>
    <div class="welcome__info">
      <h1 class="welcome__heading">
        <span class="highlight">Carbon</span> Design system in
        <span class="highlight">VueJs</span>
      </h1>
      <a class="welcome__text" href="/?path=/story/components-cvaccordion--default">Browse the components</a>
      <a class="welcome__text" href="/?path=/story/versions--default">versions</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SvWelcome',
};
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: background-size 0.6s ease;
  background: linear-gradient(90deg, #2e3f8f, #3057d5, #3057d5, #3c6df0, #3057d5, #3057d5, #2e3f8f);
}

.welcome__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../../../docs/AtCarbonVue.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.welcome__background-image {
  width: auto;
  height: 100%;
}

.welcome__info {
  display: flex;
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 38%;
  color: #fff;
  text-transform: uppercase;

  .welcome__heading {
    font-size: 3.375rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .welcome__text {
    color: #fff;
    font-size: 2.275rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .highlight {
    font-weight: 600;
  }
}
</style>
