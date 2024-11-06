import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		'zh-cn': "帕底亞 肯泰羅"
	},

	illustrator: "Taiga Kasai",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "高温の 鼻息を 吹きだすので ブレイズ種と 名づけられた。 ３本の 尻尾を 束ねている。",
		'zh-tw': "噴出的鼻息溫度很高， 因此被命名為火熾種。 ３根尾巴總是束在一起。",
		'zh-cn': "噴出的鼻息溫度很高， 因此被命名為火熾種。 ３根尾巴總是束在一起。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			'zh-cn': "後踢"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "きあいタックル",
			'zh-tw': "真氣衝撞",
			'zh-cn': "真氣衝撞"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが1進化ポケモンなら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【1階進化】寶可夢，則增加90點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為【1階進化】寶可夢，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card