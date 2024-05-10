import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑰圈兒"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "過去的貴族會將掌管金庫 鑰匙的鑰圈兒一代代地 傳承下去，並對其呵護備至。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "惡作劇之鎖"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，雙方場上的【基礎】寶可夢的特性（「惡作劇之鎖」除外）全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狙落"
		},

		effect: {
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card