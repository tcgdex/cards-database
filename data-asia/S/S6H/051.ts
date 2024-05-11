import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "肯泰羅"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "會組成群體來生活。群體中角最粗、最長，且傷痕最多的就是老大。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蠻牛"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×20點傷害。將這隻寶可夢【混亂】。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card