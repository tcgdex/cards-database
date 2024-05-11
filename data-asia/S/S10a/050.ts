import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝大鋼蛇"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "據說當大岩蛇活到了１００年以上，身體的成分 就會變得如同鑽石一般。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "能量湍流"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "終結破壞"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方的卡丟棄直到剩餘張數變為1張為止，增加其中的能量卡的張數×30點傷害。"
		},

		damage: "60+",
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

	retreat: 4,
	regulationMark: "F"
}

export default card