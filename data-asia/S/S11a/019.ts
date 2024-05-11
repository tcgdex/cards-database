import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波爾凱尼恩"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "從背上的手臂噴出體內的水蒸氣。有著將整座山轟飛的威力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "水炮灼燒"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【水】能量，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card