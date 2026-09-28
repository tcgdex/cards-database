import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Fire Energy",
        fr: "Énergie Feu de base",
        es: "Energía Fuego Básica",
        it: "Energia base Fuoco",
        pt: "Energia de Fogo Básica",
        de: "Basis-Feuer-Energie"
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
