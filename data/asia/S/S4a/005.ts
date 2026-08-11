import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "具甲武者"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "為了勝利不擇手段。會看準敵人疏忽的時機，用前腳上的小爪子解決對方。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "逆境斬"
		},

		effect: {
			'zh-tw': "增加對手的場上的「寶可夢【V】・【GX】」的數量×50點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "粉碎迴轉"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card