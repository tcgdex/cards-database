import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "班基拉斯V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "山崩"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "一擊粉碎"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方4張卡丟棄。"
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card