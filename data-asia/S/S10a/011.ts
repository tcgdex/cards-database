import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霏歐納"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "在溫暖的海面上漂流。不論被沖得多遠， 都能夠回到出生的地方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "海之宴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張【水】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card