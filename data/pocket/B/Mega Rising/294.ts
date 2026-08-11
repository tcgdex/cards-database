import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Torracat"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [726],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litten"
	},

	description: {
		'en-us': "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heat Tackle"
		},

		damage: 40,
		cost: ["Fire"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card