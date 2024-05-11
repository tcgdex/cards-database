import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大劍鬼"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "揮舞藏在鎧甲裡的劍，一劍就能擊倒對手。瞪一眼就能讓敵人嚇得不敢出聲。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "硬殼盔甲"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}, {
		name: {
			'zh-tw': "水流清洗"
		},

		effect: {
			'zh-tw': "若希望，選擇2個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card