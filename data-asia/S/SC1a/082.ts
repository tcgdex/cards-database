import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龜足巨鎧"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "７隻龜腳腳組成了１隻龜足巨鎧的身體。由頭部對手腳發號施令。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "岩石投擲"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "手部壓制"
		},

		effect: {
			'zh-tw': "若自己手牌的張數比對手手牌的張數多，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card