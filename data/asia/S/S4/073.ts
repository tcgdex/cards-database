import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破袋"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾，破破袋就會過來居住。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "挖到寶"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "污泥上投"
		},

		damage: 30,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card