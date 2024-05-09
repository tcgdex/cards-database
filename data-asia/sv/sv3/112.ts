import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ハラバリー"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	dexId: [939],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ブヨンブヨンの 体を 伸び縮み させると お腹の へそダイナモが 大電力を 発生させる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぜつえんたい"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダーエッジ"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card