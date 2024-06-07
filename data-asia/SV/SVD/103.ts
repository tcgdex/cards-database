import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄香豚"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "以自己細緻透亮的肌膚為傲。會從尾巴的前端 釋放出凝縮的香氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "搖晃芬香"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "陷入踢"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這隻寶可夢也受到60點傷害。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card