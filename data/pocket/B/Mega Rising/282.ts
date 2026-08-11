import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Melmetal ex"
	},

	illustrator: "toriyufu",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [809],
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Meltan"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Headbutt"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'en-us': "Metal Arms"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-gyarados"]
}

export default card