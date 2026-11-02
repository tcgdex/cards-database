import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Grass Energy",
        fr: "Énergie Plante de base",
		es: "Energía Planta Básica",
		de: "Basis-Pflanze-Energie",
		it: "Energia base Erba",
		pt: "Energia de Grama"
    },

    illustrator: "YOSHIROTTEN",
    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
    variants: [
        {
            type: "holo",
			stamp: ['30th-anniversary'],
			thirdParty: {
				cardmarket: 909307,
				tcgplayer: 713248
			}
        }
    ],

}

export default card
