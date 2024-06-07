import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電燈怪"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "電燈怪發出的光有著極高的亮度，甚至可以從５０００公尺深的水底照亮水面。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頻閃衝擊"
		},

		effect: {
			'zh-tw': "查看對手的手牌，若其中有能量卡，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
