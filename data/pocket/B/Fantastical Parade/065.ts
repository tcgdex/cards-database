import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [282],

	name: {
		'en-us': "Gardevoir"
	},

	illustrator: "mingo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	description: {
		'en-us': "It unleashes psychokinetic energy at full power\nwhen protecting a Trainer it has bonded closely\nwith."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Psy Turbo"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Take 2 {P} Energy from your Energy Zone and attach it to 1 of your Benched {P} Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card