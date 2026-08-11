import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一對鼠"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		'zh-tw': "會以絕佳的團隊合作，把能當成巢穴建材的東西 用門牙切斷後搬走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card