import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "化石翼龍VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "放逐奇襲"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡放置於放逐區。"
		},

		damage: 240,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]古時星星"
		},

		effect: {
			'zh-tw': "這隻寶可夢離場前，擁有「對手的場上的『寶可夢【V】』（『化石翼龍【VSTAR】』 除外）的特性全部消除。」效果的特性。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card