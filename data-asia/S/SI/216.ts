import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快拳郎"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "打出的拳擊甚至能劈開空氣。 但連續攻擊３分鐘後， 牠似乎就會想休息一下。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "俐落一擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。"
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "槍彈直擊"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card