import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [303],

	name: {
		'en-us': "Mawile"
	},

	illustrator: "kurumitsu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are\nactually steel horns that have been transformed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cavernous Chomp"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card