import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
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
			en: "Discard 3 <span class=\"energy-text energy-text--type-water\"></span> Energy from this Pokémon. This attack also does 20 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga, Palkia]
}

export default card