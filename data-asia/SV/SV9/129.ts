import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ボーマンダex"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "ワイドブラスト"
		},

		effect: {
			ja: "相手のベンチポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		name: {
			ja: "ドラゴンインパクト"
		},

		damage: 300,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	retreat: 2
}

export default card