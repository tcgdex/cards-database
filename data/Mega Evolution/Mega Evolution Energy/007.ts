import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Darkness Energy",
        fr: "Énergie Obscurité de base",
        es: "Energía Oscura Básica",
        it: "Energia base Oscurità",
        pt: "Energia de Escuridão Básica",
        de: "Basis-Finsternis-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
        {
            type: "normal",
            thirdParty: {
				cardmarket: 851014,
                tcgplayer: 656269
            }
        },
        {
            type: "reverse",
            thirdParty: {
				cardmarket: 851014,
                tcgplayer: 656269
            }
        }
    ],

}

export default card
