import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Fire Energy",
        fr: "Énergie Feu",
        es: "Energía Fuego",
        it: "Energia Fuoco",
        pt: "Energia de Fogo",
        de: "Feuer-Energie"
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
