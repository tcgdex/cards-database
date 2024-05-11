import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萌芽鹿"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "會隨著季節的推移改變居所。所以也有人說萌芽鹿會運來春天。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連擊觸手"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的「連擊」卡給對手看過後，造成其張數×40點傷害。然後，將給對手看過的「連擊」卡放回牌庫並重洗。"
		},

		damage: "40×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card