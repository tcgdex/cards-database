import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Ninetales",
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Color Coordination",
			},
			effect: {
				en: "If this Pokémon has any basic Energy attached to it that is the same type as the Defending Pokémon, this attack does 40 more damage.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281172
	}
}

export default card
