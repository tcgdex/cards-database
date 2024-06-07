import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "有著只要輕輕揮動翅膀就能吹走房屋的破壞力，因此躲在不為人知的海底生活。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "起風"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "能量閉環"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
