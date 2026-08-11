import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓老大"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有優雅高貴的身姿。與野蠻的喵頭目個性不合，互相看不起對方。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "聚寶功"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card