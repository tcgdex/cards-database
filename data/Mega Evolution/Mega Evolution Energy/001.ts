import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Grass Energy",
        fr: "Énergie Plante",
        es: "Energía Planta",
        it: "Energia Erba",
        pt: "Energia de Grama",
        de: "Pflanze-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851008,
                tcgplayer: 656263
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851008,
                tcgplayer: 656263
            }
        }
    ],

}

export default card
