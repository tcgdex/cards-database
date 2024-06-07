import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萊希拉姆"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "一旦萊希拉姆的尾部燃燒，產生的熱能將會影響大氣，使世界的天氣發生變化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "奇幻火焰"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。"
		},

		damage: 270,
		cost: ["Fire", "Lightning", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card