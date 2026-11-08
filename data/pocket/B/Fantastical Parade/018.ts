import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [105],

	name: {
		'en-us': "Alolan Marowak"
	},

	illustrator: "Dsuke",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Cubone"
	},

	description: {
		'en-us': "The cursed flames that light up the bone carried\nby this Pokémon are said to cause both mental\nand physical pain that will never fade."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fiery Bone"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card