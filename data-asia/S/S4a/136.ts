import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "用過去使用的兵器武裝自己。即使是超極巨化寶可夢，也能以一劍將之拿下。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "能量湍流"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【鋼】能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "粉碎刀鋒"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card