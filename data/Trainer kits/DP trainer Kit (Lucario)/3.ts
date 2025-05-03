import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		en: "Lucario"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
	},

	attacks: [{
		cost: [
			"Colorless"
		],
		name: {
			en: "Feint"
		},
		effect: {
			en: "This attack’s damage isn’t affected by Resistance."
		},
		damage: 30,
	}, {
		cost: [
			"Fighting",
			"Fighting"
		],
		name: {
			en: "Aura Sphere"
		},
		effect: {
			en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},
		damage: 40,
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "20+"
		}
	],

	description: {
		en: "It has the ability to sense the auras of all things. It understands human speech."
	},

	retreat: 1
}

export default card
