import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ダイケンキV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "つづらおとし"
		},

		effect: {
			ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "シャドースラッシュ"
		},

		damage: 180,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card