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
				cardmarket: 786114,
				tcgplayer: 578863
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809705,
				tcgplayer: 599738
			}
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623650
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651037
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
		}
	]


}

export default card
