import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噗隆隆"
	},

	illustrator: "HAGIYA Kaoru",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "鋼鐵身軀才是本體。 會貼在岩石上將其成分 轉換成活動用的能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "硬化"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 20,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card