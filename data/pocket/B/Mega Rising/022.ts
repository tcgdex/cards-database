import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gogoat"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [673],
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Skiddo"
	},

	description: {
		'en-us': "These Pokémon live in herds in mountainous\nplaces. The victor in their contests of clashing\nhorns will become the leader of the herd."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Double-Edge"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card