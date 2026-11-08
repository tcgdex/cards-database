import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [115],

	name: {
		'en-us': "Mega Kangaskhan ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		'en-us': "Mega Kangaskhan's strength derives from the\nmother's happiness about her child's growth.\nWatching it grow up keeps her spirits high."
	},

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Double-Punching Family"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack is used twice in a row. The second attack does 40 damage.\n(If the first attack Knocks Out your opponent's Active Pokémon, the second attack is used after your opponent chooses a new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card