<template>
    
<div>
    <h2 v-if="lang ==='en'">{{ executiveLang.en }}</h2><h2 v-else>{{ executiveLang.fr }}</h2>
    <main>
        <div class="member" v-for="member in adminMembers">
            <img v-bind:src="$withBase('/members/' + member.pictureName)" class="members">
            <p class="membre" v-if="lang ==='en'">• {{ member.descriptionEn }} •</p><p class="membre" v-else>• {{ member.descriptionFr }} •</p>
            <p class="membre">{{ member.name }}</p>            
        </div>
    </main>
    <h2 v-if="lang ==='en'">{{ teamLeaderLang.en }}</h2><h2 v-else>{{ teamLeaderLang.fr }}</h2>
    <main>
        <div class="member" v-for="member in teamLeader">
            <img v-bind:src="$withBase('/members/' + member.pictureName)" class="members">
            <p class="membre" v-if="lang ==='en'">• {{ member.descriptionEn }} •</p><p class="membre" v-else>• {{ member.descriptionFr }} •</p>
            <p class="membre">{{ member.name }}</p>
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
                    fr: "Chefs d'équipe",
                    en: "Team Leader",
                },
                msg: "Liste des membres",
                adminMembers: [
                    { name: 'Carl Blanchette',  descriptionFr:'Capitaine',       descriptionEn:'Captain',    pictureName: 'carl_blanchette.png' },
                    { name: 'Marius Fauteux',   descriptionFr:'Co-capitaine',    descriptionEn:'Co-captain', pictureName: 'marius_fauteux.jpg' },
                    { name: 'Bruno Bentenuto',  descriptionFr:'Trésorier',       descriptionEn:'Treasurer',  pictureName: 'bruno_bentenuto.jpeg' }
                ],
                teamLeader: [
                    { name: 'David Valin',      descriptionFr: 'Prothèse',      descriptionEn: 'Prosthesis', pictureName: 'david_valin.jpg' },
                    { name: 'Louis Séguin',     descriptionFr: 'Prothèse',      descriptionEn: 'Prosthesis', pictureName: 'louis_seguin.jpg' },
                    { name: 'Samuël Lefebvre',  descriptionFr: 'Site Web',      descriptionEn: 'Web Site',   pictureName: 'samuel_lefebvre.jpg' },
                    { name: 'Marius Fauteux',   descriptionFr: 'MICSA',         descriptionEn: 'MICSA',      pictureName: 'marius_fauteux.jpg' },
                    { name: 'Giancarlo Tayag',  descriptionFr: 'MICSA',         descriptionEn: 'MICSA',      pictureName: 'giancarlo_tayag.jpg' },
                    { name: 'Arnaud Brignol',   descriptionFr: 'Unity',         descriptionEn: 'Unity',      pictureName: 'arnaud_brignol.jpg' }
                ]
            }
        }
    };
</script>



<style scoped>
div.member {
    font-size: 25px;
    text-align: center;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
}

p.membre {
    line-height: 5px;
}

img.members {
   
    width: 215px; 
    height: 215px;
}

main{
    overflow: hidden;
}

main div:nth-child(4){
    clear: both;
}


</style>