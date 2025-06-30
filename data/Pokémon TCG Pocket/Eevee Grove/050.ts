import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan"
	},

	description: {
		en: "At the end of its life-span, Melmetal will rust and\nfall apart. The small shards left behind will\neventually be reborn as Meltan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mega Punch"
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