import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [221],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Swinub"
	},

	description: {
		'en-us': "If it charges at an enemy, the hairs on its back\nstand up straight. It is very sensitive to sound.",
		'fr-fr': "S'il charge un ennemi, les poils de son dos se dressent. Il est très sensible au bruit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card