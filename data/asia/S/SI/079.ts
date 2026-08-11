import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺甲貝"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "一旦牠把殼閉上， 無論是擁有什麼樣怪力的人 都無法將其打開。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "硬殼盔甲"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}, {
		name: {
			'zh-tw': "水分岔"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card