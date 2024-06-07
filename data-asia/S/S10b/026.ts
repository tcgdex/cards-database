import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "具甲武者"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "為了勝利不擇手段。會看準敵人疏忽的時機，用前腳上的小爪子解決對方。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "迎頭一擊"
		},

		effect: {
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加90點傷害。"
		},

		damage: "20+",
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card