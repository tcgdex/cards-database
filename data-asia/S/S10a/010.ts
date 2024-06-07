import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴雪王"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "會像揮動鎚子般揮下自己大大的手臂，趕走要襲擊 雪笠怪的火紅不倒翁群體。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "冰柱拳"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "捨身衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card