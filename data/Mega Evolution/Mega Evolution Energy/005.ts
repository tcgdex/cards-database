import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Psychic Energy",
        fr: "Énergie Psy de base",
        es: "Energía Psíquica Básica",
        it: "Energia base Psico",
        pt: "Energia Psíquica Básica",
        de: "Basis-Psycho-Energie"
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
