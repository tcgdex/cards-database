import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頭蓋龍"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "特徵是堅硬的頭蓋骨。 會用頭錘撞斷樹木， 吃樹上長的樹果。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "尖石攻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。"
		},

		damage: "40+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card