import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイノーズ"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	dexId: [476],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "強い 磁力を 放っているので 近くにある 電化製品は 使いものに ならなくなってしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "アサルトレーザー"
		},

		damage: "80＋",

		effect: {
			ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card