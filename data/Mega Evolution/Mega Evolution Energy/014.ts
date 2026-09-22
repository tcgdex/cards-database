import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Fighting Energy",
        fr: "Énergie Combat de base",
		es: "Energía Lucha Básica",
		de: "Basis-Kampf-Energie",
		it: "Energia base Lotta",
		pt: "Energia de Luta"
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
				cardmarket: 909314,
				tcgplayer: 713253
			}
        }
    ],

}

export default card
