import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "智揮猩"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "對森林的各個角落都瞭若指掌。如果有寶可夢受傷了，就會去尋找藥草為牠們治療。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "小聰明"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇1張自己的手牌，與牌庫上方的卡互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "擊倒"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card