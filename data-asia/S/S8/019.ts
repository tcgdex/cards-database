import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶石海星"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "會轉動像幾何圖形般的身體在水中游動。似乎一直在發射神秘的電波。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連彈星星"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的任意數量的【水】能量卡丟棄，以其張數選擇對手的寶可夢（1隻可選擇2次以上）。然後，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×30點傷害。"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card