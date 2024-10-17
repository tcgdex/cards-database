import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィランex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダブルタイプ"
		},

		effect: {
			ja: "このポケモンは、場にいるかぎりとの2つのタイプになる。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "スパイシーレイジ"
		},

		damage: "10＋",

		effect: {
			ja: "このポケモンにのっているダメカンの数×70ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card