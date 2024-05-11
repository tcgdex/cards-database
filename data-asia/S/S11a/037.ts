import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇魯莉安"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "當訓練家高興的時候，奇魯莉安會充滿能量，開心地轉著圈跳舞。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "洗鍊"
		},

		effect: {
			'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "巴掌"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card