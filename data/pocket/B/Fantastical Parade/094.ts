import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [52],

	name: {
		'en-us': "Alolan Meowth"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Deeply proud and keenly smart, this Pokémon\nmoves with cunning during battle and relentlessly\nattacks enemies' weak points."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Swagger"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card