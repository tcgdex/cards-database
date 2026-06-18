import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Grass Energy",
        fr: "Énergie Plante",
        es: "Energía Planta",
        it: "Energia Erba",
        pt: "Energia de Grama",
        de: "Pflanze-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 689750,
				tcgplayer: 475425
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 515640,
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 735364,
				tcgplayer: 517177
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 622935
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 780803,
				tcgplayer: 562155
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 599455
			}
		}
	]

}

export default card
