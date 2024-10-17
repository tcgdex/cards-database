import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキングex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さぼりたいしつ"
		},

		effect: {
			ja: "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "グレートスイング"
		},

		damage: 280,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card