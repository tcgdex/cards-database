import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人VMAX"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "狩獵爪"
		},

		effect: {
			'zh-tw': "選擇1隻對手場上的剩餘HP為「60」以下的寶可夢，將其【氣絕】。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "極巨刀鋒"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 190,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card