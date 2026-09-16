import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Fighting Energy",
        fr: "Énergie Combat",
        es: "Energía Lucha",
        it: "Energia Lotta",
        pt: "Energia de Luta",
        de: "Kampf-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851013,
                tcgplayer: 656268
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851013,
                tcgplayer: 656268
            }
        }
    ],

}

export default card
