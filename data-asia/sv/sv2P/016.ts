import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリル",
		'zh-tw': "瑪力露"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
		'zh-tw': "全身的體毛有著能將水彈開的特性， 所以就算碰到水也不會弄濕。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card