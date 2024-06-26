import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺龍王ex"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "王之號召"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【水】寶可夢卡，放置於備戰區。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×50點傷害。"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card