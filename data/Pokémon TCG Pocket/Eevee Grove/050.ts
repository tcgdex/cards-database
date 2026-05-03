import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [809],
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan"
	},

	description: {
		en: "At the end of its life-span, Melmetal will rust and\nfall apart. The small shards left behind will\neventually be reborn as Meltan.",
		fr: "En fin de vie, son corps rouille et se brise en mille morceaux. Ces derniers renaissent ensuite sous forme de Meltan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card