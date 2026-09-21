import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Metal Energy",
        fr: "Énergie Métal de base",
		es: "Energía Metálica Básica",
		de: "Basis-Metall-Energie",
		it: "Energia base Metallo",
		pt: "Energia de Metal"
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
				cardmarket: 909316,
				tcgplayer: 713255
			}
        }
    ],

}

export default card
