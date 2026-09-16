import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Psychic Energy",
        fr: "Énergie Psy",
        es: "Energía Psíquica",
        it: "Energia Psico",
        pt: "Energia Psíquica",
        de: "Psycho-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851012,
                tcgplayer: 656267
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851012,
                tcgplayer: 656267
            }
        }
    ],

}

export default card
