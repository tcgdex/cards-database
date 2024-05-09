import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャワーズ"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スパイラルドレイン"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "とうしのうずしお"
		},

		damage: "90＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card