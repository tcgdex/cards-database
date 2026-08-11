import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖可丁"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "蓬鬆的毛髮會隨季節變遷而掉落。收集這些毛髮所紡織成的毛線是高級商品。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "睡眠波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "雙重粉碎"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。"
		},

		damage: "90×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
