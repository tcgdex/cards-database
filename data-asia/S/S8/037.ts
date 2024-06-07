import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "發電器官長在胸部。當牠製造出電力的時候，會發出貝斯般的聲音。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "極度洩氣"
		},

		effect: {
			'zh-tw': "若自己的所有場上寶可夢皆為「匯流」寶可夢則生效。只要這隻寶可夢在場上，對手的場上的所有「寶可夢【VMAX】」的最大HP各減少「30」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card