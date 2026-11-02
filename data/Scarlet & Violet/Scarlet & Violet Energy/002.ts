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
				cardmarket: 689751,
				tcgplayer: 475426
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 515639,
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 735366,
				tcgplayer: 517178
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
			foil: "pokeball",
			thirdParty: {
				cardmarket: 780804,
				tcgplayer: 562160
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 599454
			}
		}
	]


}

export default card
