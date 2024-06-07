import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "いかりのツメ"
		},

		damage: "30＋",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "ぐれんのほのお"
		},

		damage: 250,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card