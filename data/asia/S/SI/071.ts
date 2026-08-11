import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用腳把樹果從樹木上 踢落，用來練習挑球， 藉此鍛鍊自己的腳法。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "截擊踢"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card