import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沼王"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "滾動"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "濕透頭擊"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄，造成其中能量卡的張數×80點傷害。"
		},

		damage: "80×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card