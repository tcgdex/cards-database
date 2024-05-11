import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "由於會朝四周釋放足以引起頭痛的精神力量，其他生物都躲得遠遠的。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "意志尖帽"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。雙方玩家各選擇1張自己的手牌，將其丟棄。（對手先丟棄。沒有手牌的玩家不丟棄。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "悔恨水滴"
		},

		effect: {
			'zh-tw': "將與自己的棄牌區的寶可夢的張數相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。"
		},

		cost: ["Psychic"]
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
	regulationMark: "D"
}

export default card