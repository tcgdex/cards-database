import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼棉棉"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "當牠把單腳紮進地面裡，並且沐浴充分的陽光，花瓣就會染上鮮豔的顏色。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
