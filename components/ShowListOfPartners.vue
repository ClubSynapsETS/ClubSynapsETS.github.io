<template>
    <div class="partners">
        <main>
            <div v-for="partner in partners">
                <a target="_blank" :href="partner.url"><img v-bind:src="'/partenaires/' + partner.pictureName" :title="partner.name" :alt="partner.name" :longdesc="partner.description"></a>
            </div>
        </main>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                partners: [
                    { name: 'ÉTS', description: 'École de Technologie Supérieure', pictureName: 'ets.png', url:'https://www.etsmtl.ca/' },
                    { name: 'OpenBCI', description: 'OpenBCI - Open Source Biosensing Tools (EEG, EMG, EKG, and more)', pictureName: 'openbci.png', url:'http://openbci.com/' },
                    { name: 'NeuroTechMTL', description: 'NeuroTechX', pictureName: 'neurotechmtl.png', url:'http://neurotechx.com' },
                    { name: 'Altium', description: 'PCB Design Software | Innovation For PCB Design', pictureName: 'altium.png', url: 'https://www.altium.com/' },
                    { name: 'Cedille', description: 'Club Cedille', pictureName: 'cedille.png', url:'http://cedille.etsmtl.ca/' },
                    { name: 'CRITIAS', description: 'NSERC-EERS Industrial Research Chair in In-Ear Technologies', pictureName: 'critias.png', url:'http://critias.etsmtl.ca/' },
                    { name: 'SolidWorks', description: 'Dassault Systèmes SolidWorks Corp', pictureName: 'solidworks.svg', url:'https://www.solidworks.com/' }
                ]
            }
        }
    };
</script>

<style scoped>
    main{
        column-count: 3;
        column-gap: 4.5rem;
        padding: 0.5rem;
    }
    img{
        max-width:128px;
        max-height:128px;
        width:auto;
        height:auto;
    }
    div.partners{
        text-align: center;
    }
</style>