import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Fire Energy",
        fr: "Énergie Feu",
        es: "Energía Fuego",
        it: "Energia Fuoco",
        pt: "Energia de Fogo",
        de: "Feuer-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851009,
				tcgplayer: 656264
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851009,
                tcgplayer: 656264
            }
        }
    ],

}

export default card
