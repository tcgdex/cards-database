import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "非常貪吃，會把刺梭魚整隻吞進嘴裡。偶爾也會搞錯對象去咬其他的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吐出射擊"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card