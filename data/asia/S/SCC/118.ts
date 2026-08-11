import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米"
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "葛拉西蒂亞花盛開的季節裡，據說牠會為了傳遞感謝之情而飛向天空。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "報恩"
		},

		effect: {
			'zh-tw': "若希望，從牌庫抽卡直到自己的手牌滿6張為止。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "天空迴旋"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card