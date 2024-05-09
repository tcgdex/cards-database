import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバーンex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おんみつひこう"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			ja: "ドミネートエコー"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、相手は手札から特殊エネルギーを出してつけられず、スタジアムも出せない。"
		}
	}],

	retreat: 0
}

export default card