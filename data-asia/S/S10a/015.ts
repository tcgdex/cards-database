import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "長長的尾巴能夠像接地線一樣保護自己，因此即使 是高壓電也不會讓牠麻痺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "王牌電光"
		},

		effect: {
			'zh-tw': "若自己已經使出了【VSTAR】力量，則增加120點傷害。"
		},

		damage: "100+",
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