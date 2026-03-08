import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	illustrator: "Scav",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [61],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwag"
	},

	description: {
		en: "Staring at the swirl on its belly causes drowsiness.\nThis trait of Poliwhirl's has been used in place of\nlullabies to get children to go to sleep.",
		fr: "Il suffit de fixer la spirale sur son ventre pour s'assoupir. On se sert parfois de lui à la place d'une berceuse pour endormir les enfants."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague"
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