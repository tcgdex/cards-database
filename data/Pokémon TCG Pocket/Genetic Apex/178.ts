import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Crunch"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
