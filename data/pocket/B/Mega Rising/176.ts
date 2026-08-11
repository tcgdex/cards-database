import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Druddigon"
	},

	illustrator: "hatachu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [621],
	hp: 110,
	types: ["Dragon"],

	description: {
		'en-us': "Druddigon are vicious and cunning. They take up\nresidence in nests dug out by other Pokémon,\ntreating the stolen nests as their own lairs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Giga Claw"
		},

		damage: 120,
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card