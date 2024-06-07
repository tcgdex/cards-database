import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哎呀球菇"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "據說開發精靈球的人很喜歡哎呀球菇， 但不知是真是假。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "花紋吸睛"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【草】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "敲擊"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card