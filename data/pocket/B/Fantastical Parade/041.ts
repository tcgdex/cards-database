import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [698],

	name: {
		'en-us': "Amaura"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Sail Fossil"
	},

	description: {
		'en-us': "Amaura is an ancient Pokémon that has gone\nextinct. Specimens of this species can sometimes\nbe found frozen in ice."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Aurora Beam"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card