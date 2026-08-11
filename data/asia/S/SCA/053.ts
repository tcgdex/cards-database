import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼基拉斯"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "誕生於地底深處。把周圍的泥土都吃光後，就會出現在地上變成蛹。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "沙沫"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card