import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pinsir"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [127],
	hp: 90,
	types: ["Grass"],

	description: {
		'en-us': "This Pokémon clamps its pincers down on its prey\nand then either splits the prey in half or flings\nit away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "X-Scissor"
		},

		damage: 50,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card