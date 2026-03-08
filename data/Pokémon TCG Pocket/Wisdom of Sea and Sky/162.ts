import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Chikorita",
		fr: "Germignon"
	},

	illustrator: "Keisin",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [152],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "A sweet aroma gently wafts from the leaf on its\nhead. It is docile and loves to soak up sun rays.",
		fr: "Un doux parfum émane de la feuille placée sur sa tête. Il est très gentil et aime dormir au soleil."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card