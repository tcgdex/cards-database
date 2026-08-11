import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "向尾喵"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "會追著自己尾巴到處跑的寶可夢。野生的向尾喵生活在森林中的樹洞裡。有著可愛臉蛋的牠是很受歡迎的寵物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抽上"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "喵踢"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
