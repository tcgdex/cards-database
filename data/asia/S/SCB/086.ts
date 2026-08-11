import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "主食是人和寶可夢的鮮血。只要一小段時間沒吸血，就會衰弱到無法飛行。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "全數抽出"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card