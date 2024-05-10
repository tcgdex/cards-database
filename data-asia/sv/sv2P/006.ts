import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキノオー",
		'zh-tw': "暴雪王"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [460],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "万年雪が 積もる 山脈で 静かに 暮らす。 ブリザードを 発生させて 姿を 隠す。",
		'zh-tw': "在萬年積雪的山脈靜靜生活。會引發 暴風雪來隱藏自己。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いてつくわざわい",
			'zh-tw': "嚴寒降災"
		},

		effect: {
			ja: "このポケモンがいるかぎり、おたがいのポケモン全員のHPは、回復しない。",
			'zh-tw': "只要這隻寶可夢在場上，雙方的所有寶可夢的HP無法恢復。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "マグナムパンチ",
			'zh-tw': "增量拳"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card