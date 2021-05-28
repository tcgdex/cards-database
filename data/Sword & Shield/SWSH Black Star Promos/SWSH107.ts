import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Urshifu V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Spiral Kick"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Sonic Legs"
		},

		effect: {
			en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card