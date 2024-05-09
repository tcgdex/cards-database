import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バオッキー"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [514],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "興奮すると 頭や 尻尾から 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートタックル"
		},

		damage: 190,

		effect: {
			ja: "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card