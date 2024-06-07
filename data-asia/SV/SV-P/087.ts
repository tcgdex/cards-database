import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏波"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "在冰冷的水中生活。 當周遭的天氣變涼時， 也會來到陸地上覓食。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "打水"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張「基本【水】能量」卡，在給對手看過後放回牌庫並重洗。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "頭錘"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card