import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ブレイブウイング"
		},

		damage: "60＋",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			ja: "ばくえんのうず"
		},

		damage: 330,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card