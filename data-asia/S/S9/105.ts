import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "ネオラントV"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ルミナスサイン"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "アクアリターン"
		},

		damage: 120,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card