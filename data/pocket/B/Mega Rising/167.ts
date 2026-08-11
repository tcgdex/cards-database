import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ferrothorn"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [598],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Ferroseed"
	},

	description: {
		'en-us': "Its spikes are harder than steel. This Pokémon\ncrawls across rock walls by stabbing the spikes\non its feelers into the stone."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Guard Press"
		},

		damage: 50,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card