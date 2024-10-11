import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロロームex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "アクセルフラッシュ"
		},

		damage: "20＋",

		effect: {
			ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。"
		}
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			ja: "スピードブレイク"
		},

		damage: 250,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card