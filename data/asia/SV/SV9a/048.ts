import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのリククラゲ",
		'zh-tw': "<派帕的>陸地水母",
		'zh-cn': "<派帕的>陸地水母"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [949],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "森の奥に 集団で 暮らす コロニーを 作る。 よそ者が 近寄ることを ひどく 嫌う。",
		'zh-tw': "會在森林深處建造 集體生活用的聚落。 極為厭惡有外來者靠近。",
		'zh-cn': "會在森林深處建造 集體生活用的聚落。 極為厭惡有外來者靠近。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっぱる",
			'zh-tw': "拉扯",
			'zh-cn': "拉扯"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			'zh-cn': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			'zh-cn': "突擊"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'zh-cn': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card