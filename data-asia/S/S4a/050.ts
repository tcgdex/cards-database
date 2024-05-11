import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鰓魚龍"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "超乎尋常的腳力和顎力讓牠在古代所向無敵。但由於捕盡獵物，導致牠們自己也滅絕了。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "原始之律"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出寶可夢並完成進化。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card