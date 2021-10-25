import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Ice Rider Calyrex V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Blizzard"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Frost Stamp"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card