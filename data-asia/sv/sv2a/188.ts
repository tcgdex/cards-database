import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キュウコンex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ねっぷう"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "うつしほむら"
		},

		damage: "80＋",

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、140ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card