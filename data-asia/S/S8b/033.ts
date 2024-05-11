import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡 雪雲的樣子"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "被冰雹打到時就會變成這個樣子。全身上下冷冰冰的，皮膚有一點結冰。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "看天"
		},

		effect: {
			'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "冰霜颱風"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「冰霜颱風」。"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card