import { Card } from "../../../interfaces"
import Set from "../SC1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈VMAX"
	},

	dexId: [849],
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨引暴全場"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加80點傷害。"
		},

		damage: "160+",
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