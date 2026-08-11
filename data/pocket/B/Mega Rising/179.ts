import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Goodra"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [706],
	hp: 150,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Sliggoo"
	},

	description: {
		'en-us': "This Pokémon is uncontrollable when enraged.\nIt rampages on and on, lashing its tail with\nenough power to send a dump truck flying."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Spiral Drain"
		},

		damage: 100,
		cost: ["Water", "Psychic", "Colorless"],

		effect: {
			'en-us': "Heal 40 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card