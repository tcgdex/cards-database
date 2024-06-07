import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。吃飽了就會開始睡覺。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "擋道"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢無法撤退。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "倒下"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【睡眠】。"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card