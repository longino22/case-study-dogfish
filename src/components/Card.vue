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
                        v-bind:href="'https://' + cardLinks[index - 1]"
                        target="_blank"
                        id="card-link"
                        >{{ cardLinks[index - 1] }}</a
                    >
                </div>
                <div class="collected-money">Vybráno</div>
                <div class="card-price-container">
                    <button
                        class="red-button"
                        v-if="currentIndex != index"
                        v-on:click="
                            chooseCharity(index - 1),
                                (isClicked = true),
                                (currentIndex = index)
                        "
                    >
                        PŘISPĚT
                    </button>
                    <button
                        class="red-button clicked"
                        v-if="isClicked && currentIndex == index"
                    >
                        VYBRÁNO
                    </button>
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
            isClicked: false,
            currentIndex: null,
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
            cardLinks: [
                "www.breastcancer.cz",
                "www.zsalsa.cz",
                "www.cestazasnem.cz",
                "www.klubsvobodnychmatek.cz",
                "aperio.cz",
                "www.dasenka-utulek.cz",
            ],
        };
    },
    methods: {
        chooseCharity(charityIndex) {
            let charity = this.cardImagePaths[charityIndex].slice(5, -4);
            this.$emit("chooseCharity", charity);
        },
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
    font-size: 0.95rem;
    color: $main-text-color;
}
.card-link {
    margin-bottom: 20px;
    text-decoration: none;
}
#card-link:link,
#card-link:visited,
#card-link:active {
    opacity: 0.6;
    color: $main-text-color;
}
.collected-money {
    text-align: right;
    font-size: 0.8rem;
    color: black;
}
.card-price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price {
    font-size: 1.4rem;
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
