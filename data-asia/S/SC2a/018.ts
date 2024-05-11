import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "葛拉西蒂亞花盛開的季節裡，據說牠會為了傳遞感謝之情而飛向天空。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "寄生種子"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "花之搬運"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢與附加的卡全部翻回反面並重洗，放回對手的牌庫下方。"
		},

		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
