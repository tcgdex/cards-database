import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜈蚣王"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "毒針"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 50,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "毒液衝擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card