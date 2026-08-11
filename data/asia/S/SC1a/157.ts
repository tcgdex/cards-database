import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "電光"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電輪"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card