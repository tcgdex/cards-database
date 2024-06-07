import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霓虹魚"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "像爬行般地在海底游動。鰭發出的光充滿奇幻氣氛， 就像夜空中的星星一樣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "隨興游水"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "攀瀑"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card