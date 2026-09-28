import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Grass Energy",
        fr: "Énergie Plante de base",
        es: "Energía Planta Básica",
        it: "Energia base Erba",
        pt: "Energia de Grama Básica",
        de: "Basis-Pflanze-Energie"
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
