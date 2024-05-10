import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バオッキー",
		'zh-tw': "爆香猿"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [514],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "興奮すると 頭や 尻尾から 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。",
		'zh-tw': "興奮的時候，頭部與尾巴就會變熱並飛出火花。不知為何最喜歡吃甜的。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ",
			'zh-tw': "三猴行"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「花椰猿」「爆香猿」「冷水猿」，則這隻寶可夢使用招式所需的【無】能量全部消除。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートタックル",
			'zh-tw': "熱力衝撞"
		},

		damage: 190,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card