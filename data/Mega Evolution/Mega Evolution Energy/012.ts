import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Lightning Energy",
        fr: "Énergie Electrik de base",
		es: "Energía Rayo Básica",
		de: "Basis-Elektro-Energie",
		it: "Energia base Lampo",
		pt: "Energia de Raios"
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
				cardmarket: 909312,
				tcgplayer: 713251
			}
        }
    ],

}

export default card
