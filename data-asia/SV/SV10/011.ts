import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奧利紐",
		'zh-cn': "奧利紐",
		ja: "オリーニョ"
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會分享自己香氣新鮮、 美味可口的油。自古以來 就與人類共存，直到現在。",
		'zh-cn': "會分享自己香氣新鮮、 美味可口的油。自古以來 就與人類共存，直到現在。",
		ja: "フレッシュな 香りの 美味しい オイルを 分けてくれる。 古くから 人間と 共存してきた。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "營養素",
			'zh-cn': "營養素",
			ja: "えいようそ"
		},

		effect: {
			'zh-tw': "將自己的1隻寶可夢恢復「40」HP。",
			'zh-cn': "將自己的1隻寶可夢恢復「40」HP。",
			ja: "自分のポケモン1匹のHPを「40」回復する。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "撞擊",
			'zh-cn': "撞擊",
			ja: "たいあたり"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [929]
}

export default card