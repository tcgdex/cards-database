import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケンタロス",
		'zh-tw': "肯泰羅",
		'zh-cn': "肯泰羅"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "獲物に 狙いを つけると 尻尾で 体を 叩きながら まっすぐ 突っ込んでくる。",
		'zh-tw': "鎖定了獵物之後， 就會一邊用尾巴抽打身體， 一邊筆直地衝向目標。",
		'zh-cn': "鎖定了獵物之後， 就會一邊用尾巴抽打身體， 一邊筆直地衝向目標。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つのでつく",
			'zh-tw': "角撞",
			'zh-cn': "角撞"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "クリーンヒット",
			'zh-tw': "俐落一擊",
			'zh-cn': "俐落一擊"
		},

		damage: "50+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card