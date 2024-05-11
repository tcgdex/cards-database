import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "用牠那彈力十足的毛織成的地毯就像是彈簧墊， 可以站上去蹦蹦跳。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "後投"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾滾衝刺"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card