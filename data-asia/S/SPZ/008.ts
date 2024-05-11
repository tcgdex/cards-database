import { Card } from "../../../interfaces"
import Set from "../SPZ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "能從刺的尖端放電。會用銳利的牙齒刮取附在岩石上的海藻來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "連續滾動"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。"
		},

		damage: "30+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card