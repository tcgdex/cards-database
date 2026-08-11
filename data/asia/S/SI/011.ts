import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢歌仙人掌"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拉扯"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "傲傲拳"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量，則增加70點傷害。"
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card