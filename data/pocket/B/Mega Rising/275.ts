import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greninja ex"
	},

	illustrator: "Raita Kazama",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [658],
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Frogadier"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shifting Stream"
		},

		effect: {
			'en-us': "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Aqua Edge"
		},

		damage: 100,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card