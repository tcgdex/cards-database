import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88417,
				cardmarket: 275039
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88417,
				cardmarket: 275039
			},
		},
	],
	types: [
		"Psychic"
	],
}

export default card
