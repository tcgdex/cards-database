import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哈克龍"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'zh-tw': "據說牠全身上下散發出氣場時，周圍的天氣 就會在轉眼間為之一變。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "龍尾"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card