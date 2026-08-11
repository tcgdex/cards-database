import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電獸"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用電流刺激肌肉，因此能迅速行動。電流也能讓 肌肉放鬆並快速治癒酸痛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "進擊鐳射"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上附有「寶可夢道具」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card