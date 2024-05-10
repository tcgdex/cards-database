import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投羽梟"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "對周圍的動靜非常敏感，能夠察覺到站在身後的對手， 投擲鋒利的羽毛給予致命一擊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "穿通"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card