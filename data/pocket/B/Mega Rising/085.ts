import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Ampharos ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [181],
	hp: 210,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Flaaffy"
	},

	description: {
		'en-us': "The tail's tip shines brightly and can be seen from\nfar away. It acts as a beacon for lost people."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Lightning Lancer"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			'en-us': "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card