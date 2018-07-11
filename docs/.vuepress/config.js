module.exports = {
    locales: {
        '/': {
            lang: 'fr-CA',
            title: 'SynapsÉTS',
            description: 'Un club scientifique à l\'ÉTS spécialisé en Interface Cerveau Machine (ICM)'
        },
        '/en/': {
            lang: 'en-US',
            title: 'SynapsÉTS',
            label: 'English',
            description: 'A scientific club at ÉTS specialized in Brain Computer Interface (BCI)'
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logoIcon.png' }],        // Browser icon
        ['meta', { property:'og:image', content:'http://synapsets.etsmtl.ca/synapsets.png'}] // For Open Graph ~ Facebook sharing
    ],
    themeConfig: {
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'Français',
                nav: [
                    { text: 'Accueil', link: '/' },
                    { text: 'Membres', link: '/members/' },
                    { text: 'Projets', link: '/projects/' },
                    { text: 'Contact', link: '/contact/' }
                ],
                sidebar: [
                    '/',
                    'members/',
                    'projects/',
                    'contact/'
                ]
            },
            '/en/':{
                selectText: 'Langues',
                // label for this locale in the language dropdown
                label: 'English',
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Members', link: '/en/members/' },
                    { text: 'Projects', link: '/en/projects/' },
                    { text: 'Contact', link: '/en/contact/' }
                ],
                sidebar: [
                    'en/',
                    'en/members/',
                    'en/projects/',
                    'en/contact/'
                ]
            }
        },        
        search: false        
    },
    markdown: { 
        anchor: { permalink: true, permalinkSymbol:'#'}
    }
};