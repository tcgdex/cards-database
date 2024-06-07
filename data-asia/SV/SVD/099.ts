import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貪心栗鼠"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "會把樹果囤積在雙頰裡。沒有樹果而感到嘴裡空虛時， 會含著小石子來忍過去。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷吃"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card