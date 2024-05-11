import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙鈴仙人掌"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會發出沙鈴般的聲音。鳥寶可夢會因那輕快的節奏而受驚飛走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "刺痛"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "強力尖刺"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×60點傷害。"
		},

		damage: "60×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
