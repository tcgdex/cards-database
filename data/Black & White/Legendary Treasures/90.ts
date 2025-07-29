import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Zoroark",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zorua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brutal Bash",
			},
			effect: {
				en: "Does 20 damage times the number of Darkness Pokémon you have in play.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Rush",
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on this Pokémon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281241
	}
}

export default card
