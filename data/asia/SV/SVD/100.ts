import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "超貪心"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方3張卡。將那些卡加入手牌。或者將那些卡丟棄，從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滑落回轉"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「滑落回轉」。"
		},

		damage: 210,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card