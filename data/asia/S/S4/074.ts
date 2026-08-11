import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "吃掉的垃圾會在體內轉化為毒素。毒素的成分會隨著吃掉的垃圾而不同。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "灰塵旋風"
		},

		effect: {
			'zh-tw': "在給對手看過自己的棄牌區的所有「寶可夢道具」後，造成其張數×30點傷害。然後，將給對手看過的「寶可夢道具」放回牌庫並重洗。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "噴毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card