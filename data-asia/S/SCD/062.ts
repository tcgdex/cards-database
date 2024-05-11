import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "全身都是能發電的器官。牠製造的電能可以滿足伽勒爾全域的電力需求。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "兆級電光"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【雷】能量全部丟棄，對手的2隻備戰寶可夢也各受到40點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card