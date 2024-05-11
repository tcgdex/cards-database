import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萊希拉姆&噴火龍GX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "逆鱗"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上所放置的傷害指示物的數量×10點傷害。"
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "閃焰強襲"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃焰強襲」。"
		},

		damage: 230,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "雙重火焰GX"
		},

		effect: {
			'zh-tw': "若額外附有3個【火】能量，則增加100點傷害。這個情況下，這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。[對戰中，己方只可使用1次GX招式。]"
		},

		damage: "200+",
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "C"
}

export default card