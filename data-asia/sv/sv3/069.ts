import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ドオー"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [980],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "敵に 襲われると 太い 棘を 胴体から 突き出して 反撃。 身を切る 覚悟の 危険な 技。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "とびちるどく"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれどくにする。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムショック"
		},

		damage: "80＋",

		effect: {
			ja: "相手のバトルポケモンがどくなら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card