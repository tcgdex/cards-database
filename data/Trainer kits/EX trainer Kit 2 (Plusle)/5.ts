import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		en: "Metang"
	},

	illustrator: "Hisao Nakamura",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Beldum",
	},

	attacks: [{
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			en: "Psychic Boom"
		},
		effect: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon."
		},
		damage: "10+"
	}, {
		cost: [
			"Psychic",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Blow"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage."
		},
		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 2,
}

export default card
