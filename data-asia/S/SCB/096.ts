import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斬司令"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "為了搶佔能找到磨刀石的地方，和斧牙龍展開了激烈的鬥爭。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鋼斬"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【鋼】寶可夢，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless"]
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