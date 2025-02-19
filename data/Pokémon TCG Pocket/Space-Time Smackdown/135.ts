import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bidoof"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Super Fang"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Halve your opponent's Active Pokémon's remaining HP, rounded down."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
