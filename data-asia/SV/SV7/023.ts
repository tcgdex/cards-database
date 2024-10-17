import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "肋骨海龜",
		'zh-cn': "肋骨海龜",
		ja: "アバゴーラ"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "由於會將獵物的硬殼和骨頭 也都吃得乾乾淨淨一點不剩， 所以牠的甲殼長得又厚又堅硬。",
		'zh-cn': "由於會將獵物的硬殼和骨頭 也都吃得乾乾淨淨一點不剩， 所以牠的甲殼長得又厚又堅硬。",
		ja: "獲物の 殻や骨も 残さず きれいに たいらげるので 甲羅は ぶ厚く 硬く 成長する。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "原始心得",
			'zh-cn': "原始心得",
			ja: "げんしのこころえ"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的寶可夢使用的招式，對對手的戰鬥場的進化寶可夢造成的傷害「+30」點。",
			'zh-cn': "只要這隻寶可夢在場上，自己的寶可夢使用的招式，對對手的戰鬥場的進化寶可夢造成的傷害「+30」點。",
			ja: "このポケモンがいるかぎり、自分のポケモンが使うワザの、相手のバトル場の進化ポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水炮粉碎",
			'zh-cn': "水炮粉碎",
			ja: "ハイドロクラッシュ"
		},

		damage: 150,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [565]
}

export default card