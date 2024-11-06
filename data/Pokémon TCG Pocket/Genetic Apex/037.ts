import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whip"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon can't attack during your opponent's next turn."
		}
	}],

	retreat: 1,
	rarity: "None"
}

export default card