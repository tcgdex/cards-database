import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			en: "Dimensional Storm"
		},

		damage: 150,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard 3 {W} Energy from this Pokémon. This attack also does 20 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card