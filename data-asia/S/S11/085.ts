import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ｚ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "#N/A"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "降級光束"
		},

		effect: {
			'zh-tw': "選擇對手的1隻進化寶可夢，移除任意數量的「進化卡」使其退化。將移除的卡放回對手的牌庫並重洗。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "强力光束"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card