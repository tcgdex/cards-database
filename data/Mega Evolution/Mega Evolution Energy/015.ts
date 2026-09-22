import { Card } from '../../../interfaces'
import Set from '../Mega Evolution Energy'

const card: Card = {
    name: {
        en: "Basic Darkness Energy",
        fr: "Énergie Obscurité de base",
		es: "Energía Oscura Básica",
		de: "Basis-Finsternis-Energie",
		it: "Energia base Oscurità",
		pt: "Energia de Escuridão"
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
				cardmarket: 909315,
				tcgplayer: 713254
			}
        }
    ],

}

export default card
