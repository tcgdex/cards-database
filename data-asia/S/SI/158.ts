import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "龐克衝擊"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢【麻痺】。這個情況下，這隻寶可夢也受到70點傷害。"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card