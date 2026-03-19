import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird"
	},

	illustrator: "USGMEN",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "It always carries its food with it, wherever it goes.\nIf attacked, it throws its food at the opponent."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Box of Surprises"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 70 damage to your opponent's Active Pokémon. If tails, heal 30 damage from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card