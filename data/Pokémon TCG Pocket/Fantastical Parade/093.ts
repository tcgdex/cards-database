import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cornerstone Mask Ogerpon"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "In this form, it draws on the power of stone.\nIts body is rock-solid, protecting it from all\nmanner of attacks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cornerstone Dance"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, this Pokémon takes −100 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card