import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "歡樂配對"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的棄牌區選擇1張支援者卡，在給對手看過後加入手牌。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "飄舞"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card