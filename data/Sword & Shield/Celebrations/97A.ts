import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Fairy"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Break Through"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 60,
		cost: ["Fairy", "Colorless", "Colorless"]
	}, {
		name: {
			en: "X Blast"
		},

		effect: {
			en: "This Pokémon can't use X Blast during your next turn."
		},

		damage: 140,
		cost: ["Fairy", "Fairy", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	retreat: 2
}

export default card
