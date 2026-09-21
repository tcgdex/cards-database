import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Fire Energy",
        fr: "Énergie Feu de base",
		es: "Energía Fuego Básica",
		de: "Basis-Feuer-Energie",
		it: "Energia base Fuoco",
		pt: "Energia de Fogo"
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
				cardmarket: 909308,
				tcgplayer: 713249
			}
        }
    ],

}

export default card
