import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Blaziken ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [257],
	hp: 210,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Combusken"
	},

	description: {
		'en-us': "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear over\nbuildings."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Mega Burning"
		},

		damage: 120,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Discard Fire{R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned."
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