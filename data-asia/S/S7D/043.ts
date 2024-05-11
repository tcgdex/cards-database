import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙首暴龍"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'zh-tw': "２個頭會爭搶同一個食物。明明沒有去和別人戰鬥，卻總是遍體鱗傷。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 40,
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			'zh-tw': "龍之頭擊"
		},

		damage: 100,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card