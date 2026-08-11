import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "雖然擁有一擊定勝負的威力，但因為記性實在太差，對戰還沒結束就會忘記對手是誰。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水槍"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
