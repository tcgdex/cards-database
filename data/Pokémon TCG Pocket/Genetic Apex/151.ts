import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Growl"
		},

		effect: {
			en: "During your opponent's next turn, attacked used by the Defending Pokémon do -20 damage"
		}
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
