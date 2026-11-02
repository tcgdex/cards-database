import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		270,
	],
	set: Set,
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},
			damage: "20",
		},
	],

	illustrator: "Kanako Eo",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293318,
				tcgplayer: 110422
			}
		}
	]
}

export default card

