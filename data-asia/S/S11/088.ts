import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長耳兔"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是注意著周圍的狀況。危險逼近時，就會給對手 奉上破壞力十足的踢腿。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢飛"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "二連踢"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。"
		},

		damage: "100×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card