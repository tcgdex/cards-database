import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Mothim"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "It loves the honey of flowers and steals honey<br />collected by Combee."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gust"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0
}

export default card