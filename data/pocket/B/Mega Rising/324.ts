import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Passimian ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [766],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Offload Pass"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all {F} Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Seismic Toss"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card