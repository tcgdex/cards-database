import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓老大"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
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