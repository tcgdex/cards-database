import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "普隆隆姆ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "暴衝閃光"
		},

		effect: {
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加120點傷害。"
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "高速破壞"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡全部丟棄。"
		},

		damage: 250,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card