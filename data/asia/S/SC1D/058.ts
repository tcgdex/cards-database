import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會製造電能，並傳送到腳上作為奔跑時的輔助動力。能不眠不休地奔跑三天三夜。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "電氣衝刺"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
