import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥龍VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "陷阱電光"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置12個傷害指示物。"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "極巨衝撞"
		},

		damage: 200,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card