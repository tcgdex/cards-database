import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Water Energy",
        fr: "Énergie Eau",
        es: "Energía Agua",
        it: "Energia Acqua",
        pt: "Energia de Água",
        de: "Wasser-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
                tcgplayer: 656265
            }
        },
        {
            type: "reverse",
            thirdParty: {
                tcgplayer: 656265
            }
        }
    ],

}

export default card
