import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ランターン"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [171],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "強い 光を 放ち 獲物の 目を 眩ませる。 隙が できたら 電撃を おみまいする。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ピッカリだま"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "アクアスパーク"
		},

		damage: "80＋",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card