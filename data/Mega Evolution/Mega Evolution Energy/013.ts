import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Psychic Energy",
        fr: "Énergie Psy de base",
		es: "Energía Psíquica Básica",
		de: "Basis-Psycho-Energie",
		it: "Energia base Psico",
		pt: "Energia Psíquica"
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
				cardmarket: 909313,
				tcgplayer: 713252
			}
        }
    ],

}

export default card
