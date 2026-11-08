import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blaziken"
	},

	illustrator: "GOSSAN",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [257],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Combusken"
	},

	description: {
		'en-us': "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear\nover buildings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Blaze Kick"
		},

		damage: 100,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card