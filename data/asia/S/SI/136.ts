import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電龍"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "探照燈尾"
		},

		effect: {
			'zh-tw': "查看對手的手牌，若其中有能量卡，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card