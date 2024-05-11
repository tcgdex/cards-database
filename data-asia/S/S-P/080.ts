import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "最近發表了聚集大量皮卡丘來建造發電廠的計畫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搖尾巴"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "皮卡伏特"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card