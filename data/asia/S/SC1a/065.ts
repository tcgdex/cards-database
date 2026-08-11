import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛腿郎"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "擁有卓越的平衡感。無論處於什麼姿勢都可以連續施展踢擊的厲害角色。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "下盤踢"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "聯合攻擊"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「快拳郎」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card