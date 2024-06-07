import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老翁龍"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "住在海拔超過３０００公尺的山上。偶爾也會來到城鎮，與住在那裡的孩子們一起玩耍。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "龍之波動"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方2張卡丟棄。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
