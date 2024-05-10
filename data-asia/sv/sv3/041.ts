import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ハラバリー",
		'zh-tw': "電肚蛙"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [939],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ブヨンブヨンの 体を 伸び縮み させると お腹の へそダイナモが 大電力を 発生させる。",
		'zh-tw': "只要伸縮肥嘟嘟的身體，就能讓肚子上的發電臍產生大量的電氣。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぜつえんたい",
			'zh-tw': "絕緣體"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的【雷】寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダーエッジ",
			'zh-tw': "雷電刀鋒"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card