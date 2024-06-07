import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龜足巨鎧"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "７隻龜腳腳組成了１隻龜足巨鎧的身體。 由頭部對手腳發號施令。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "放逐區障礙"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手獲得的獎賞卡不加入手牌，而是放置於放逐區。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆裂劈"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card