import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "１０８個靈魂聚集在一起成為了寶可夢，但其中 似乎混進了壞心眼的靈魂。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "詛咒遺言"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "孤魂連鎖"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的「花岩怪」的張數×60點傷害。"
		},

		damage: "10+",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card