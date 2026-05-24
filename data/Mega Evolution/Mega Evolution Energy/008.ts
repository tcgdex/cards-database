import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Metal Energy",
        fr: "Énergie Métal",
        es: "Energía Metálica",
        it: "Energia Metallo",
        pt: "Energia de Metal",
        de: "Metall-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
                tcgplayer: 656270
            }
        },
        {
            type: "reverse",
            thirdParty: {
                tcgplayer: 656270
            }
        }
    ],

}

export default card
