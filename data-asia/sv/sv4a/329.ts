import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロルex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダストフィールド"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手がベンチに出せるポケモンの数は3匹になる。相手のベンチに4匹以上いるなら、相手はベンチが3匹になるまでポケモンをトラッシュする。［ベンチの数を変更する効果は、少ない数が優先される。］"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ポイズンジェム"
		},

		damage: 140,

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card