import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰寶"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在萬年積雪覆蓋的山區。 戴著將大氣中的水分冷凍後 形成的冰盔，藉此保護自己。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰柱"
		},

		damage: 40,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card