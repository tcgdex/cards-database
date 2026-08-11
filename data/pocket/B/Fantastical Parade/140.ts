import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [660],

	name: {
		'en-us': "Diggersby"
	},

	illustrator: "Mina Nakai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bunnelby"
	},

	description: {
		'en-us': "The fur on its belly retains heat exceptionally\nwell. People used to make heavy winter clothing\nfrom fur shed by this Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Earthquake"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack also does 10 damage to each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card