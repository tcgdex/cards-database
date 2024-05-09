import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキメノコex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょうかすいげつ"
		},

		effect: {
			ja: "このポケモンが、バトル場できぜつしたとき、自分はコインを1回投げる。オモテなら、とられるサイドは1枚少なくなる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "フロストバレット"
		},

		damage: 140,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card