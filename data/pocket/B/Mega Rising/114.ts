import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gothitelle"
	},

	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [576],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Gothorita"
	},

	description: {
		'en-us': "It gazes at the stars to predict the future. It acts\nsomewhat detached because it has seen the end\nof all existence."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Stellar Cradle"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "During your opponent's next turn, if they attach Energy from their Energy Zone to the Defending Pokémon, that Pokémon will be Asleep."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card