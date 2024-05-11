import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毽子花"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "為了沐浴陽光，不僅會打開花瓣，還會為了更接近太陽而飄上空中。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "日光進化"
		},

		effect: {
			'zh-tw': "在自己的回合，每次從自己的手牌將能量附於這隻寶可夢身上時，可使用1次。從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card