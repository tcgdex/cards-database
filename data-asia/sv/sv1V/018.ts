import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘルガー"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	dexId: [229],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "するどいキバ"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "だいもんじ"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card