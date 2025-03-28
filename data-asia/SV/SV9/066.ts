import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのギギギアル",
		'zh-tw': "N的齒輪怪",
		'zh-cn': "N的齒輪怪"
	},

	illustrator: "matazo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [601],
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "棘の 先から 強い 電撃を 発射。 赤いコアに たくさんの エネルギーを 蓄えている。",
		'zh-tw': "會從尖刺的前端發出強力 電擊。紅色核心裡填充著 非常多的能量。",
		'zh-cn': "會從尖刺的前端發出強力 電擊。紅色核心裡填充著 非常多的能量。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "マグネブラスト",
			'zh-tw': "磁力爆破",
			'zh-cn': "磁力爆破"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "トリプルスマッシュ",
			'zh-tw': "三重粉碎",
			'zh-cn': "三重粉碎"
		},

		damage: "120×",

		effect: {
			ja: "コインを3回投げ、オモテの数×120ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×120點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card