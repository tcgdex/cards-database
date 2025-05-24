import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇",
		'zh-cn': "斗笠菇",
		ja: "キノガッサ"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會撒出毒孢子，然後再讓 因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
		'zh-cn': "會撒出毒孢子，然後再讓 因吸入孢子而痛苦不堪的 對手吃上一記重拳。",
		ja: "毒の 胞子を ばらまき 吸いこんで 苦しむ 相手に 強烈な パンチを くらわせる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "傷害衝刺",
			'zh-cn': "傷害衝刺",
			ja: "ダメージラッシュ"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×50點傷害。",
			'zh-cn': "擲硬幣直到出現反面，增加正面出現的次數×50點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超級吸取",
			'zh-cn': "超級吸取",
			ja: "メガドレイン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			'zh-cn': "將這隻寶可夢恢復「30」HP。",
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [286]
}

export default card