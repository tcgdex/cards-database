import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [877],
	hp: 170,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spark"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Wheel"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card