import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マッスグマ",
		'zh-tw': "直衝熊"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [264],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "抜群の 瞬発力と するどいツメで 獲物を しとめる。 曲がった 道を 走るのは 下手。",
		'zh-tw': "用自己超群的爆發力和銳利的爪子來制服獵物。不擅長在彎曲的道路上奔跑。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド",
			'zh-tw': "噴射頭擊"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card