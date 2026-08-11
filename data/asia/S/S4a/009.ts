import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "森林之宴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【草】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "木槌"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card