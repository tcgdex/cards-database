import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Surfing Pikachu",
		fr: "Pikachu surfeur Niv. 13",
		de: "Surfendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "One summer, a group of Pikachu was found riding the waves at the local beach.",
	},

	thirdParty: {
		cardmarket: 278688,
		tcgplayer: 89644
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
