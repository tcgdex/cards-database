import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		de: "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	types: [
		"Grass"
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85880,
				cardmarket: 279731
			},
		},
	],

}

export default card
