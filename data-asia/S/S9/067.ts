import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大朝北鼻"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "會驅使３個小組件去獲取食物或與敵人戰鬥。 本體基本上只負責下命令。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拉鋸磁力"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到40點傷害。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵之衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card