import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "重泥挽馬"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "泥巴使牠的蹄變得比岩石還要堅硬，只要一擊就能產生足以破壞卡車的威力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雙重衝擊"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×120點傷害。"
		},

		damage: "120×",
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
