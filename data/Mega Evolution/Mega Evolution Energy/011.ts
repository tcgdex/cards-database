import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Water Energy",
        fr: "Énergie Eau de base",
		es: "Energía Agua Básica",
		de: "Basis-Wasser-Energie",
		it: "Energia base Acqua",
		pt: "Energia de Água"
    },

    illustrator: "YOSHIROTTEN",
    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
    variants: [
        {
            type: "holo",
			thirdParty: {
				cardmarket: 909310,
				tcgplayer: 713250
			}
        }
    ],

}

export default card
