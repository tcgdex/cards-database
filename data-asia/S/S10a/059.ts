import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長尾怪手"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有如同手掌般靈活的尾巴。棲息在樹上，有古書將其敘述為 只有一隻手的奇妙寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡作劇之尾"
		},

		effect: {
			'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。若希望，重洗那個牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "抓"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card