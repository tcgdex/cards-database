import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天罩蟲"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "正在殼裡成長著。用精神力量掌握外界的狀況，做好進化的準備。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雷達"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card