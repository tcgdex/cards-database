import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Metal Energy",
        fr: "Énergie Métal de base",
        es: "Energía Metálica Básica",
        it: "Energia base Metallo",
        pt: "Energia de Metal Básica",
        de: "Basis-Metall-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851015,
                tcgplayer: 656270
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851015,
                tcgplayer: 656270
            }
        }
    ],

}

export default card
