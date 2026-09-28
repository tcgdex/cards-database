import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Fire Energy",
        fr: "Énergie Feu de base",
        es: "Energía Fuego Básica",
        it: "Energia base Fuoco",
        pt: "Energia de Fogo Básica",
        de: "Basis-Feuer-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836250,
				tcgplayer: 645287
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836973
			}
		}
	]


}

export default card
