import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌舔"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "神奇的舌頭能夠伸到身高的好幾倍遠。至今沒人能解開 為什麼它會這麼神奇。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "舌擊"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card