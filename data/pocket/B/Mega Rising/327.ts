import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bibarel ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [400],
	hp: 160,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bidoof"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Carefree Press"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-altaria"]
}

export default card