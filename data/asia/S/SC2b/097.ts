import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪機雅娜"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "５００多年前被製造出的人造寶可夢。可理解人類的語言，但本身無法說話。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "超越之洞"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張卡。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "機關加農炮"
		},

		effect: {
			'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。"
		},

		damage: "10+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
