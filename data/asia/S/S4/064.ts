import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身都是肌肉。會用觸手施展絞技，威力無與倫比。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鎖頭"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "觸手光炮"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若這隻寶可夢使用了「鎖頭」，則增加120點傷害。"
		},

		damage: "50+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card