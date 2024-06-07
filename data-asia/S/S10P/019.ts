import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾斯"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "能操控降至零下２００度的寒氣，將靠近牠的東西 都在一瞬間就冰封起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雷吉之門"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴雪制約"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】」，無法使用招式。"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card