import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 88419,
		cardmarket: 276616
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88419,
				cardmarket: 276616
			},
		},
	],
}

export default card
