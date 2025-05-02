import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [326],
	set: Set,

	name: {
		en: "Grumpig"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Snap Tail"
		},
		effect: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},
	}, {
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			en: "Psypunch"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 1,
}

export default card
