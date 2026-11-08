import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frogadier"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [657],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Froakie"
	},

	description: {
		'en-us': "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bounce"
		},

		damage: 40,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card