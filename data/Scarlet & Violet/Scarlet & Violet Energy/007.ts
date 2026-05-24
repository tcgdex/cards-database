import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Darkness Energy",
        fr: "Énergie Obscurité",
        es: "Energía Oscura",
        it: "Energia Oscurità",
        pt: "Energia de Escuridão",
        de: "Finsternis-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            foil: "cosmos"
        },
        {
            type: "normal"
        }
    ],
}

export default card
