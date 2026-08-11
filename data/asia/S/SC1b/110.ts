import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "禿鷹娜"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然性情粗暴，如果遇到了迷路的禿鷹丫頭，便會細心照顧牠，直到牠長大離巢。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "骨棒亂打"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗中奇襲"
		},

		effect: {
			'zh-tw': "對手的身上放置有傷害指示物的1隻寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
