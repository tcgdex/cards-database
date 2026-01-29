import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Deeply proud and keenly smart, this Pokémon\nmoves with cunning during battle and relentlessly\nattacks enemies' weak points."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Swagger"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card