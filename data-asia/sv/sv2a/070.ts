import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツドン",
		'zh-tw': "口呆花"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [70],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
		'zh-tw': "會先吐出有毒的粉末， 讓對手停止行動後， 再用溶解液解決對手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card