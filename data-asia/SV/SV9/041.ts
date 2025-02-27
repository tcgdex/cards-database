import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのアブリー",
		'zh-tw': "莉莉艾的萌虻",
		'zh-cn': "莉莉艾的萌虻"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [742],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "人や ポケモンの 楽しそうな オーラを 感じ取り 寄ってきては 長い 口で 突くので 痛い。",
		'zh-tw': "只要感覺到人類或寶可夢 發出的快樂氣場，就會靠過去 用長長的嘴戳對方。被戳會很痛。",
		'zh-cn': "只要感覺到人類或寶可夢 發出的快樂氣場，就會靠過去 用長長的嘴戳對方。被戳會很痛。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "じっとする",
			'zh-tw': "紋絲不動",
			'zh-cn': "紋絲不動"
		},

		effect: {
			ja: "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			'zh-cn': "將這隻寶可夢恢復「10」HP。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card