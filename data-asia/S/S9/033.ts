import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凍原熊"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "吐出的氣息凍結而成的冰牙比鋼鐵還硬。為了尋找食物， 會在寒冷的海裡游動徘徊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "絕對零度"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card