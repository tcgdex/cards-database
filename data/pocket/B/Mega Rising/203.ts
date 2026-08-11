import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stoutland"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [508],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Herdier"
	},

	description: {
		'en-us': "Stoutland is immensely proud of its impressive\nmoustache. It's said that moustache length is what\ndetermines social standing among this species."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Dangerous Bite"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 70 more damage."
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