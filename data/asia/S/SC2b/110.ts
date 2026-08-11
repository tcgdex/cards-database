import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "優雅貓"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "過著居無定所生活的寶可夢。即使有其他寶可夢接近自己睡覺的地方也絕不會去爭鬥，而會換個地方睡覺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "媚惑之尾"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【混亂】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "月亮衝擊"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
