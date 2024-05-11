import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豪力"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "因為肉體非常強韌，所以戴著力量限制腰帶來控制力量。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢倒"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "狂毆"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加70點傷害。"
		},

		damage: "50+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card