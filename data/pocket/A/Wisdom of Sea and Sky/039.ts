import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte"
	},

	illustrator: "Scav",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [61],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Poliwag"
	},

	description: {
		'en-us': "Staring at the swirl on its belly causes drowsiness.\nThis trait of Poliwhirl's has been used in place of\nlullabies to get children to go to sleep.",
		'fr-fr': "Il suffit de fixer la spirale sur son ventre pour s'assoupir. On se sert parfois de lui à la place d'une berceuse pour endormir les enfants."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card