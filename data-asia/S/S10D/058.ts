import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏飽栗鼠"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "在尾巴裡囤積樹果。雖然囤過頭了就會掉出來， 但遲鈍的牠不會發現。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "傾瀉"
		},

		effect: {
			'zh-tw': "將自己的手牌全部丟棄，若丟棄的張數為5張以上，則增加150點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card