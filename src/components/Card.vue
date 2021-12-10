<template>
    <div class="cards-container">
        <div class="card" v-for="index in 6" v-bind:key="index.id">
            <div class="card-top">
                <img
                    v-bind:src="
                        require(`@/assets/charities/${
                            cardImagePaths[index - 1]
                        }`)
                    "
                    class="card-image"
                />
                <div class="card-title">{{ cardTitles[index - 1] }}</div>
            </div>
            <div class="card-bottom">
                <div class="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nihil, error maxime ipsa provident, cupiditate quibusdam
                    blanditiis quod voluptatibus distinctio accusamus totam
                    perspiciatis quasi illum! Ea itaque eaque beatae maiores at!
                </div>
                <div class="card-link">
                    <a
                        href="https://www.kocka-v-nouzi.cz"
                        target="_blank"
                        id="card-link"
                        >www.kocka-v-nouzi.cz</a
                    >
                </div>
                <div class="collected-money">Vybráno</div>
                <div class="card-price-container">
                    <button class="red-button">PŘISPĚT</button>
                    <div class="price">2 300 Kč</div>
                </div>
            </div>
            <div class="progress-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            cardImagePaths: [
                "logo-aliance-zen.png",
                "logo-alsa.png",
                "logo-cesta-za-snem.png",
                "logo-klub-svobodnych-matek.png",
                "logo-aperio.png",
                "logo-utulek-dasenka.png",
            ],
            cardTitles: [
                "Aliance žen s rakovinou prsu",
                "Alsa",
                "Cesta za snem",
                "Matky potřebují pomoc",
                "Aperio",
                "Pro milovníky koček",
            ],
        };
    },
};
</script>

<style lang="scss">
$main-accent-color: #e50019;
$main-text-color: #34404b;
.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 40px;
    margin: 0px 150px 0px 150px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 25%;
    height: auto;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
    padding: 40px 30px 40px 30px;
    background-color: white;
}
.card-image {
    display: block;
    object-fit: contain;
    width: 100%;
    height: auto;
}
.card-title {
    font-family: "Pacifico", cursive;
    font-size: 2rem;
    color: $main-accent-color;
}
.card-description {
    margin: 10px 0px 10px 0px;
    font-family: "Open Sans", sans-serif;
    font-size: 0.95rem;
    color: $main-text-color;
}
.card-link {
    margin-bottom: 20px;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
}
#card-link:link,
#card-link:visited,
#card-link:active {
    opacity: 0.6;
    color: $main-text-color;
}
.collected-money {
    text-align: right;
    font-family: "Open Sans", sans-serif;
    font-size: 0.7rem;
    color: #b8b8b8;
}
.card-price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: $main-accent-color;
}
.progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    /* Width would then be dynamic, based on amount donated */
    width: 50%;
    height: 8px;
    background-color: $main-accent-color;
}
</style>
