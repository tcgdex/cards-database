import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷伊布V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "雷電箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "飛彈針"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×60點傷害。"
		},

		damage: "60×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card