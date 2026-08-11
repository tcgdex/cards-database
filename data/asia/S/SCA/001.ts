import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "坐騎小羊"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "只要有水與陽光，就能以背上的葉子產生能量，即使不吃東西也沒問題。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "光合作用"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【草】能量卡，附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 50,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card