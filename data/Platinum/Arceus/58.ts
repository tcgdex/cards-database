import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Burmy Trash Cloak",
		de: "Burmy Lumpenumhang"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],
	
	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cloak Evolution",
				de: "Umhang-Evolution"
			},
			effect: {
				en: "Burmy Trash Cloak can evolve during the turn you play it.",
				de: "Burmy Lumpenumhang kann in dem Zug entwickelt werden, in dem du es gespielt hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Tackle",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278930,
		tcgplayer: 84057
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
