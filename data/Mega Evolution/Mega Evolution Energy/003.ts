import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Water Energy",
        fr: "Énergie Eau de base",
        es: "Energía Agua Básica",
        it: "Energia base Acqua",
        pt: "Energia de Água Básica",
        de: "Basis-Wasser-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851010,
                tcgplayer: 656265
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851010,
                tcgplayer: 656265
            }
        }
    ],

}

export default card
