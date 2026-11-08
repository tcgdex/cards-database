import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [373],

	name: {
		'en-us': "Salamence"
	},

	illustrator: "kodama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Shelgon"
	},

	description: {
		'en-us': "It becomes uncontrollable if it is enraged.\nIt destroys everything with shredding claws\nand fire."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Dragon Dive"
		},

		damage: 150,
		cost: ["Fire", "Water", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this Pokémon also does 50 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card