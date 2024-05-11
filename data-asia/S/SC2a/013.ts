import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "椰蛋樹"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "每個腦袋各有各的思想，會通過心靈感應來交談，決定大家要做什麼。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈腦蛋"
		},

		effect: {
			'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光束"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
