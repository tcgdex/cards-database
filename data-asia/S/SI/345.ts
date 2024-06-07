import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "過動猿"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "如果不活動身體， 就會累積過多的壓力， 使身體狀況變糟。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲壞"
		},

		effect: {
			'zh-tw': "將場上的競技場卡丟棄。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card