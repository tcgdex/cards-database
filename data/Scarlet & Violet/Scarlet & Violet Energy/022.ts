import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Fighting Energy",
        fr: "Énergie Combat de base",
        es: "Energía Lucha Básica",
        it: "Energia base Lotta",
        pt: "Energia de Luta Básica",
        de: "Basis-Kampf-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836254,
				tcgplayer: 645302
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836977
			}
		}
	]


}

export default card
