import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜舞妮"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "會用頭部的果蒂擊打飛來啄食自己的藍鴉，並且對牠使出猛烈的踢擊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "戲法舞步"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card