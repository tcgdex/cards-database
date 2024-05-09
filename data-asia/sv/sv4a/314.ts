import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨクバリス"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "体の 約２倍の 長さの 尻尾で 木から 落とした 木の実を ごっそり 包んで 持ち去るぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみつく"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きょうかまえば"
		},

		damage: "80＋",

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card