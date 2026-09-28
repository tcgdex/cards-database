import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Lightning Energy",
        fr: "Énergie Electrik de base",
        es: "Energía Rayo Básica",
        it: "Energia base Lampo",
        pt: "Energia de Raios Básica",
        de: "Basis-Elektro-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851011,
                tcgplayer: 656266
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851011,
                tcgplayer: 656266
            }
        }
    ],

}

export default card
