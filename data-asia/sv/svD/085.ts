import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "金屬吸收"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【鋼】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "全金屬關節"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×30點傷害。"
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card