<template>

<div>
    <h2 v-if="lang ==='en'">{{ executiveLang.en }}</h2><h2 v-else>{{ executiveLang.fr }}</h2>
    <main class="container">
        <div class="member" v-for="member in adminMembers">
            <img v-bind:src="$withBase('/members/' + member.pictureName)" class="members">
            <p class="clsMember" v-if="lang ==='en'">• {{ member.descriptionEn }} •</p><p class="clsMember" v-else>• {{ member.descriptionFr }} •</p>
            <p class="clsMember">{{ member.name }}</p>
        </div>
    </main>
    <h2 v-if="lang ==='en'">{{ teamLeaderLang.en }}</h2><h2 v-else>{{ teamLeaderLang.fr }}</h2>
    <main class="container">
        <div class="member" v-for="member in teamLeader">
            <img v-bind:src="$withBase('/members/' + member.pictureName)" class="members">
            <p class="clsMember" v-if="lang ==='en'">• {{ member.descriptionEn }} •</p><p class="clsMember" v-else>• {{ member.descriptionFr }} •</p>
            <p class="clsMember">{{ member.name }}</p>
        </div>
    </main>
</div>

</template>

<script>
    export default {
        props: ['lang'],
        data() {
            return {
                executiveLang: {
                    fr: "Exécutif",
                    en: "Executive",
                },
                teamLeaderLang: {
                    fr: "Directeurs",
                    en: "Directors",
                },
                msg: "Liste des membres",
                adminMembers: [
                    { name: 'Alexandre-Xavier Panu-bule', descriptionFr:'Capitaine', descriptionEn:'Captain', pictureName: 'alexandre-xavier_panu-bule.jpg' },
                    { name: 'Mubashar Hussain ', descriptionFr:'Co-capitaine et Directeur Électronique', descriptionEn:'Co-Capitain and Electronic Director', pictureName: 'mubashar_hussain.png' },
                    { name: 'Jacques Veneziano ', descriptionFr:'Trésorier et chef d’équipe pour MICSA', descriptionEn:'Treasurer and MICSA Team Lead', pictureName: 'jacques_veneziano.png' }
                ],
                teamLeader: [
                    { name: 'Interim', descriptionFr: 'Directeur Logiciel', descriptionEn: 'Software Director', pictureName: 'missing.png' },
                    { name: 'Interim', descriptionFr: 'Directeur Multimédia', descriptionEn: 'Multimedia Director', pictureName: 'missing.png' },
                    { name: 'Jean-Rémi Martin', descriptionFr: 'Directeur Mécanique', descriptionEn: 'Mechanical Director', pictureName: 'jean-remi_martin.png' },
                    { name: 'Mubashar Hussain', descriptionFr: 'Membre et co-directeur mécanique', descriptionEn: 'Co-Mechanical Director', pictureName: 'mubashar_hussain.png' }
                ]
            }
        }
    };
</script>



<style scoped>
div.member {
    font-size: 20px;
    text-align: center;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
}

p.clsMember {
    line-height: 5px;
}

img.members {

    width: 215px;
    height: 215px;
}
.container {
    display:flex;
    flex-wrap: wrap;
}
.container>* {
        flex: 1 1 250px;
    }

main{
    overflow: hidden;
}

main div:nth-child(4){
    clear: both;
}


</style>