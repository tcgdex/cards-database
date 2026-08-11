import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corviknight"
	},

	illustrator: "hncl",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [823],
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Corvisquire"
	},

	description: {
		'en-us': "Although its wings have partly turned to steel and\nbecome heavy as a result, this Pokémon flies\nthrough the skies with ease."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Iron Wings"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "Discard 2 {M} Energy from this Pokémon. During your opponent's next turn, this Pokémon takes −50 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card