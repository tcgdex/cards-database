import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "It swings its handmade hammer around to protect\nitself, but the hammer is often stolen by Pokémon\nthat eat metal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card