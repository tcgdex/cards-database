import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身都是肌肉。會用觸手施展絞技，威力無與倫比。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蛸固"
		},

		effect: {
			'zh-tw': "受到這個招式的寶可夢，使用招式所需的能量增加2個【無】能量，且無法撤退。這個效果在這隻「八爪武師」離開戰鬥場前一直持續，且不會重複。"
		},

		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			'zh-tw': "重重橫掃"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card