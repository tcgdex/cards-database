import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "最近發表了聚集大量皮卡丘來建造發電廠的計畫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "充電"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電球"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card