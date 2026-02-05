import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "フライゴンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ストームバック"
		},

		damage: 130,

		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Water", "Fighting", "Metal"],

		name: {
			ja: "ペリドットソニック"
		},

		effect: {
			ja: "相手の「ポケモンex・V」全員に、それぞれ100ダメージ。このワザのダメージは弱点・抵抗力を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None",

	thirdParty: {
		cardmarket: 787587
	}
}

export default card