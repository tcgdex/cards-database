import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Whimsicott ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [547],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cottonee"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Grass Knot"
		},

		damage: 40,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card