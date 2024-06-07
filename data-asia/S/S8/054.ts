import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "隆隆岩"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'zh-tw': "會讓自己的身體爆炸，然後利用爆炸的力量快速登上陡峭的山路。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "自棄轟炸"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，在使用招式的寶可夢身上放置10個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "捨身衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card