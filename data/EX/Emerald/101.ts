import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		de: "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 85875,
		cardmarket: 276612
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85875,
				cardmarket: 276612
			},
		},
	],
}

export default card
