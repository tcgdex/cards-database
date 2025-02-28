import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オタチ",
		'zh-tw': "尾立",
		'zh-cn': "尾立"
	},

	illustrator: "Taiga Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [161],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "警戒心が 強い ポケモン。 しなやかに 動く 尻尾は 筋肉質で 触ると 硬い。",
		'zh-tw': "警戒心強的寶可夢。 能夠柔韌擺動的尾巴 肌肉發達，摸起來很硬。",
		'zh-cn': "警戒心強的寶可夢。 能夠柔韌擺動的尾巴 肌肉發達，摸起來很硬。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊",
			'zh-cn': "掌擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card