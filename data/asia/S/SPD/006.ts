import { Card } from "models/database/card"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯VMAX",
		'ja-jp': "デオキシスVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "防護DNA",
			'ja-jp': "プロテクトDNA"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【VSTAR】」招式的傷害「-30」點。",
			'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンVSTAR」から受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨吸取",
			'ja-jp': "ダイドレイン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'ja-jp': "このポケモンのHPを「30」回復する。"
		},

		damage: 160,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card