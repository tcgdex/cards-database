import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luxray"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [405],
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio"
	},

	description: {
		'en-us': "Luxray's ability to see through objects comes in\nhandy when it's scouting for danger."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Flash Impact"
		},

		damage: 110,
		cost: ["Lightning", "Colorless"],

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-blaziken"]
}

export default card