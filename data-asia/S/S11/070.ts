import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓鱷"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'zh-tw': "又被稱為沙之惡霸。就連厚厚的鐵板也能被牠 用強力的下顎輕鬆咬爛。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "沙之結夥"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，與這隻寶可夢在戰鬥場上受到對手的招式的傷害而【氣絕】時，各可使用1次。在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "捨身衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card