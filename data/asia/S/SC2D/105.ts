import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "金屬怪"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "２隻鐵啞鈴結合起來，精神力量也變為２倍。但是智商並沒有發生改變。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "磁力爆破"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
