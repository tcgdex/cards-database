import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arceus ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [493],
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fabled Luster"
		},

		effect: {
			'en-us': "This Pokémon can't be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Ultimate Force"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card