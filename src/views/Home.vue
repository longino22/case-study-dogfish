<template>
    <div class="wrapper">
        <a href="https://dogfish.cz">
            <img src="../assets/dogfish/logo-dogfish.png" class="logo"
        /></a>
        <div class="main-background">
            <img
                src="../assets/dogfish/dogfish-vizual-web.png"
                class="main-image"
            />
            <div class="header-container">
                <div class="first-header">
                    Přejeme vám vše nejlepší do nového roku a buďte zdraví
                </div>
                <div class="subheader">Tady je nějaký subheadline</div>
                <div class="button-container">
                    <button class="blue-button">
                        <a href="#castka" id="blue-button">VYBRAT DÁREK</a>
                    </button>
                </div>
            </div>
        </div>
        <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            placeat earum quas facilis expedita nobis reiciendis ea commodi sed!
            Repellat veniam animi inventore aspernatur. Ducimus facere
            praesentium dignissimos accusantium tempora. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Hic quasi corrupti eos delectus
            nulla dolorum quod velit nam sequi quia, rerum beatae amet! Illo
            quae animi cum molestias adipisci ea.
        </div>
        <div class="second-header" id="castka">
            Hodnota vašeho hlasu je 300 Kč
        </div>
        <Card />
        <div class="third-header">Máte hotovo?</div>
        <form @submit.prevent class="email-form">
            <label>Váš e-mail<sup>*</sup></label>
            <input
                placeholder="petr.novotny@email.com"
                type="email"
                :model="userEmail"
                :value="queryEmail"
            />
            <label>Vzkaz</label>
            <textarea
                rows="5"
                placeholder="Chcete nám něco vzkázat? Budeme rádi."
            ></textarea>
            <button class="blue-button">ODESLAT DÁREK</button>
        </form>
        <p>
            Tady napsat, že mohou přispívat pouze naši zákazníci a dodavatelé a
            ať to nikam nesdílí, že hlasy neznámých osob nebuou uznány. Co zbyde
            se přerozdělí, aby to dělalo částku 20000Kč.
        </p>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
    components: {
        Card,
    },
    data() {
        return {
            queryEmail: this.$route.query.email,
            inputEmail: this.$route.query.email,
        };
    },
    mounted() {
        console.log(this.$route.query.email);
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&family=Pacifico&display=swap");
$main-accent-color: #e50019;
$main-text-color: #34404b;
.wrapper {
    position: relative;
}
.logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 55px;
}
.main-background {
    position: relative;
    height: 135vh;
}
.main-image {
    object-fit: cover;
    height: inherit;
    width: 100%;
}
.header-container {
    position: absolute;
    top: 5%;
    transform: translateY(-5%);
    width: 100%;
    text-align: center;
}
.first-header,
.second-header,
.third-header {
    text-align: center;
    font-family: "Pacifico", cursive;
    color: $main-accent-color;
}
.first-header {
    margin: 50px 28vw 0 28vw;
    font-size: 3.5rem;
}
.second-header,
.third-header {
    font-size: 2.5rem;
}
.second-header {
    padding: 30px 0px 30px 0px;
}
.third-header {
    margin-top: 50px;
}
.subheader {
    text-align: center;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    color: $main-text-color;
}
.button-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.blue-button {
    border: none;
    border-radius: 3px;
    margin: 30px;
    padding: 15px 40px 15px 40px;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    background-color: #4e9dc8;
    color: white;
}
#blue-button:link,
#blue-button:visited,
#blue-button:active {
    text-decoration: none;
    color: white;
}
.blue-button:hover {
    cursor: pointer;
}
.description {
    margin: 80px 150px 80px 150px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 1.1rem;
    color: $main-text-color;
}
.red-button {
    border-radius: 3px;
    border: 1px solid $main-accent-color;
    padding: 10px 40px 10px 40px;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    color: $main-accent-color;
    background: none;
}
.red-button:hover {
    cursor: pointer;
}
.email-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
label {
    margin: 15px;
    font-family: "Open Sans", sans-serif;
    color: #707070;
}
input,
textarea {
    width: 30%;
    text-align: center;
    padding: 10px 30px 10px 30px;
    border-radius: 3px;
    border: 1px solid #cecece;
    font-family: "Open Sans", sans-serif;
    color: #34404bbd;
}
::placeholder {
    opacity: 0.56;
}
p {
    text-align: center;
    margin: 100px 250px -100px 250px;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    color: #707070;
}
@media screen and (min-width: 2000px) {
    .main-background {
        height: 190vh;
    }
    p {
        margin-bottom: -300px;
    }
}
@media screen and (max-width: 700px) {
    .logo {
        height: 100px;
        width: auto;
        margin: 15px;
    }
    .header-container {
        top: 30%;
        transform: translateY(-30%);
    }
    .first-header {
        font-size: 2rem;
        margin: 0px 30px 0px 30px;
    }
    .second-header,
    .third-header {
        font-size: 2rem;
    }
    .second-header {
        padding: 30px;
    }
    .subheader {
        font-size: 1rem;
        margin-top: 15px;
    }
    .blue-button {
        margin: 15px;
    }
    .description {
        margin: 40px 30px 40px 30px;
    }
    .cards-container {
        flex-direction: column;
        column-gap: 0;
        margin: 0px 30px 30px 30px;
    }
    .card {
        flex-basis: 100%;
    }
    .card-title {
        font-size: 1.5rem;
    }
    p {
        margin: 40px 30px 40px 30px;
    }
}
@media screen and (min-width: 700px) and (max-width: 1200px) {
    .header-container {
        top: 20%;
        transform: translateY(-20%);
    }
    .first-header {
        font-size: 3rem;
        margin: 0px 60px 0px 60px;
    }
    .second-header,
    .third-header {
        font-size: 2rem;
    }
    .second-header {
        padding: 30px;
    }
    .third-header {
        margin-top: 30px;
    }
    .subheader {
        font-size: 1.25rem;
    }
    .description {
        margin: 40px 60px 40px 60px;
    }
    .cards-container {
        margin: 0px 30px 30px 30px;
    }
    .card {
        flex-basis: 40%;
    }
    .card-title {
        font-size: 1.75rem;
    }
    p {
        margin: 40px 60px 40px 60px;
    }
}
@media screen and (max-width: 1024px) {
    input,
    textarea {
        width: 50%;
    }
}
</style>
