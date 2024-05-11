import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿VSTAR"
	},

	illustrator: "nagano",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "火球狂燒"
		},

		effect: {
			'zh-tw': "若希望，將自己的牌庫上方最多5張卡丟棄。然後，增加丟棄的張數×40點傷害。"
		},

		damage: "40+",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星餘火"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的能量卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "30×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card