import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇諾栗鼠"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "潔癖使得牠連一絲灰塵都無法容忍，會把自己身上 滲出的油塗在巢上保持清潔。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "巴掌"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "三旋擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
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