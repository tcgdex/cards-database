import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "角金魚"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "會優雅地搖擺背鰭、胸鰭和尾鰭，所以被稱為水中的舞者。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "攀瀑"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
