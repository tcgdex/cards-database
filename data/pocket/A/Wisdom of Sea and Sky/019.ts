import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [469],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Yanma"
	},

	description: {
		'en-us': "It prefers to battle by biting apart foes' heads\ninstantly while flying by at high speed.",
		'fr-fr': "Il excelle dans l'art de mordre ses ennemis en plein vol, et à grande vitesse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bug Buzz",
			'fr-fr': "Bourdon"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card