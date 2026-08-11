import { Card } from "../../../interfaces"
import Set from "../SC1D"

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
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。"
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
