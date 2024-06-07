import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰紅利"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張【水】能量卡，將其丟棄。然後，從自己的牌庫抽出3張卡。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card