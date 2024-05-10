import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンメル",
		'zh-tw': "呆火駝"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [322],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "１２００度の マグマが 体内で 燃えている。 寒くなると マグマが 固まるので 動きが 鈍くなる。",
		'zh-tw': "體內燃燒著１２００度的熔岩。一旦氣溫變低，熔岩就會凝固， 動作也會因此變得遲緩。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card