import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Incineroar ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [727],
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Torracat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Fire Fang"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		name: {
			'en-us': "Scar-Charged Smash"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card