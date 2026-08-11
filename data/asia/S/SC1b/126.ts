import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘掘兔"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "擅長用耳朵挖洞。只需一個晚上就能挖出深至地下１０公尺的巢穴。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "掘掘"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
