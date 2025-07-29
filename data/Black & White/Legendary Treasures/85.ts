import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Landorus",
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		645,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Abundant Harvest",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gaia Hammer",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281236
	}
}

export default card
