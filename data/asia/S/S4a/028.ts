import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨百火焚野"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×40點傷害。若希望，在造成傷害後，從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card