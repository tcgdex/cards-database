import { Card } from "../../../interfaces"
import Set from "../SC1D"

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
		'zh-tw': "智揮猩能夠透過揮動由樹葉和體毛所製成的扇子，隨心所欲地指揮寶可夢。"
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
