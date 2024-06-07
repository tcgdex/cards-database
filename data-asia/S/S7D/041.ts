import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝牙盧卡"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "擁有操縱時間的力量。在神奧地區被稱為神，並在神話中登場。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "時間扭轉"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】」無法使用招式。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 210,
		cost: ["Psychic", "Metal", "Metal", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card