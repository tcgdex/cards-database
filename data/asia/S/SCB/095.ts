import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "駒刀小兵"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "以劈斬司令為首領組成族群。目標是有朝一日能統領同類，所以每天都在不懈地鍛鍊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劍舞"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「劈開」的傷害「+70」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 10,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card