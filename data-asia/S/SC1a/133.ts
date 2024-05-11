import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "在尾巴裡囤積樹果。雖然囤過頭了就會掉出來，但遲鈍的牠不會發現。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "尾利是圖"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "尾擊"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card