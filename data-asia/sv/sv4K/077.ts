import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アラブルタケ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくふんじん"
		},

		effect: {
			ja: "このポケモンに「ブーストエナジー 古代」がついているなら、自分の番に1回使える。おたがいのバトルポケモンを、それぞれどくにする。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "あばれハンマー"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card