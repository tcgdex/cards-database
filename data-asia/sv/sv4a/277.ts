import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴"
	},

	illustrator: "Scav",
	category: "Pokemon",
	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到，即使在精靈球裡， 火爆猴好像也在發怒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],
		damage: 70,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		name: {
			'zh-tw': "暴亂拳"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card