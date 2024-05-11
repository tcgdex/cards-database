import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "最近發表了聚集大量皮卡丘來建造發電廠的計畫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蹭蹭臉頰"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特攻擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 1,
	regulationMark: "C"
}

export default card