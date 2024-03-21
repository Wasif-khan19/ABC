export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui_kits' as const,
        features: [
            {
                name:'Top Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/kaffee.png'
            },
            {
                name:'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/gym.png'
            },
            {
                name:'Best Selling',
                href: '#',
                imageSrc: '/nav/ui-kits/medical.png'
            },
        ]
    },
    {
        label: 'Icons',
        value: 'ui_icons' as const,
        features: [
            {
                name:'Black Icons',
                href: '#',
                imageSrc: '/nav/icons/black.png'
            },
            {
                name:'Outlined Icons',
                href: '#',
                imageSrc: '/nav/icons/colored.png'
            },
            {
                name:'Colored Icons',
                href: '#',
                imageSrc: '/nav/icons/outlined.png'
            },
        ]
    },
]