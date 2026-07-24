import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
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
				tcgplayer: 85456,
				cardmarket: 275036
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85456,
				cardmarket: 275036
			},
		},
	],
	types: [
		"Fire"
	],
}

export default card
