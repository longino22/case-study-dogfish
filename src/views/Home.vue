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

        <Card v-on:chooseCharity="assignCharity" />

        <div class="third-header">Máte hotovo?</div>
        <form class="email-form" @submit.prevent v-on:submit="vote">
            <label>Váš e-mail<sup>*</sup></label>
            <input
                placeholder="petr.novotny@email.com"
                type="email"
                required
                v-model="email"
            />
            <label>Vzkaz</label>
            <textarea
                rows="5"
                placeholder="Chcete nám něco vzkázat? Budeme rádi."
                v-model="comment"
            ></textarea>
            <button class="blue-button" type="submit">ODESLAT DÁREK</button>
            <div class="error-message" v-if="isError">
                {{ errorMessage }}
            </div>
            <div class="success-message" v-if="isSuccess">
                Váš hlas byl úspěšně odeslán. Děkujeme!
            </div>
        </form>
        <p>
            Tady napsat, že mohou přispívat pouze naši zákazníci a dodavatelé a
            ať to nikam nesdílí, že hlasy neznámých osob nebuou uznány. Co zbyde
            se přerozdělí, aby to dělalo částku 20 000 Kč.
        </p>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "@/axios.js";
export default {
    components: {
        Card,
    },
    data() {
        return {
            email: this.$route.query.email,
            comment: "",
            charity: "",
            errorMessage: "",
            isError: false,
            isSuccess: false,
        };
    },
    methods: {
        assignCharity(charity) {
            this.charity = charity;
        },
        async vote() {
            try {
                // Check if user has chosen charity
                if (this.charity) {
                    let dogfishResponse = await axios.post(
                        `/?action=putvote&email=${this.email}&vote=${this.charity}&comment=${this.comment}`
                    );
                    console.log(dogfishResponse.data);

                    // Check if e-mail is valid
                    if (!dogfishResponse.data.success) {
                        this.isError = true;
                        this.isSuccess = false;
                        switch (true) {
                            case dogfishResponse.data.reason ===
                                "NOT_IN_WHITELIST":
                                this.errorMessage =
                                    "Váš e-mail jsme nenašli v našem systému";
                                break;
                            case dogfishResponse.data.reason ===
                                "ALREADY_VOTED":
                                this.errorMessage = "Už jste hlasovali";
                                break;
                            case dogfishResponse.data.reason === "DB_ERROR" ||
                                dogfishResponse.data.reason ===
                                    "INSERT_DB_ERROR":
                                this.errorMessage =
                                    "Váš hlas se nepovedl uložit, zkuste to prosím znovu";
                                break;
                        }
                    } else {
                        this.isError = false;
                        this.isSuccess = true;
                    }
                } else {
                    this.isError = true;
                    this.errorMessage = "Vyberte si prosím charitu";
                }
            } catch (error) {
                console.log(error.message);
            }
        },
    },
};
</script>

<style lang="scss">
* {
    font-family: "Open Sans", sans-serif;
}
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
    font-size: 2.7rem;
}
.second-header {
    padding: 30px 0px 40px 0px;
}
.third-header {
    margin-top: 50px;
}
.subheader {
    text-align: center;
    margin-top: 30px;
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
    font-size: 0.9rem;
    background-color: #4e9dc8;
    color: white;
    transition: 0.3s;
}
#blue-button:link,
#blue-button:visited,
#blue-button:active {
    text-decoration: none;
    color: white;
}
.blue-button:hover {
    cursor: pointer;
    background-color: #3d81a7;
    transition: 0.3s;
}
.description {
    margin: 80px 150px 80px 150px;
    text-align: center;
    font-size: 1.1rem;
    color: $main-text-color;
}
.red-button {
    border-radius: 3px;
    border: 1px solid $main-accent-color;
    padding: 10px 40px 10px 40px;
    font-size: 0.9rem;
    color: $main-accent-color;
    background: none;
    transition: 0.3s;
}
.red-button:hover {
    cursor: pointer;
    background-color: $main-accent-color;
    color: white;
    transition: 0.3s;
}
.red-button.clicked {
    background-color: $main-accent-color;
    color: white;
}
.email-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
label {
    margin: 15px;
    color: #707070;
}
input,
textarea {
    width: 30%;
    text-align: center;
    padding: 10px 30px 10px 30px;
    border-radius: 3px;
    border: 1px solid #cecece;
    color: #34404bbd;
}
.error-message,
.success-message {
    font-weight: 600;
}
.error-message {
    color: $main-accent-color;
}
.success-message {
    color: #519259;
}
::placeholder {
    opacity: 0.56;
}
p {
    text-align: center;
    margin: 100px 250px -100px 250px;
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
@media screen and (max-width: 374px) {
    .card-bottom {
        position: relative;
    }
    .card-price-container {
        display: flex;
        flex-direction: column;
    }
    .card-link {
        font-size: 0.8rem;
    }
    .red-button {
        width: 100%;
    }
    .price {
        margin-top: 30px;
    }
    .collected-money {
        position: absolute;
        bottom: 9%;
        left: 50%;
        transform: translateX(-50%);
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
        font-size: 2.2rem;
    }
    .second-header {
        padding: 30px 30px 40px 30px;
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
        font-size: 2.7rem;
        margin: 0px 60px 0px 60px;
    }
    .second-header,
    .third-header {
        font-size: 2.2rem;
    }
    .second-header {
        padding: 30px 30px 40px 30px;
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
