import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體，朝著敵人彈跳過去。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連列火焰"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方與這隻寶可夢身上附加的【火】能量相同數量的卡丟棄。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "灼燒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
