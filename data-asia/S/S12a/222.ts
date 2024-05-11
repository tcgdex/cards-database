import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯VMAX",
		ja: "デオキシスVMAX"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "防護DNA",
			ja: "プロテクトDNA"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【VSTAR】」招式的傷害「-30」點。",
			ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンVSTAR」から受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨吸取",
			ja: "ダイドレイン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			ja: "このポケモンのHPを「30」回復する。"
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