import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水君V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瞬步"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暴雪迴旋曲"
		},

		effect: {
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。"
		},

		damage: "20+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card