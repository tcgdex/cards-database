import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火伊布"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "當火焰在體內積蓄時，火伊布的體溫也會隨之上升到最高９００度。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "灼熱覺醒"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【草】寶可夢的特性全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火之鬃"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card