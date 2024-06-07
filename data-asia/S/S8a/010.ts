import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萊希拉姆"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "一旦萊希拉姆的尾部燃燒，產生的熱能將會影響大氣，使世界的天氣發生變化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱之風"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "闇黑火焰"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「捷克羅姆」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card