import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [6],

	name: {
		'en-us': "Charizard"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmeleon"
	},

	description: {
		'en-us': "Its wings can carry this Pokémon close to an\naltitude of 4,600 feet. It blows out fire at very\nhigh temperatures."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Inferno Onrush"
		},

		damage: 150,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card