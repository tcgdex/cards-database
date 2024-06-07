import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "毛髮能發揮肌肉纖維般的作用。伸展開來時會像觸手那樣把對手纏繞起來。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 60,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "殿後攻擊"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢的數量為2隻以下，則增加140點傷害。"
		},

		damage: "100+",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card