import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リククラゲex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まもりのきんし"
		},

		effect: {
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "コロニーラッシュ"
		},

		damage: "80＋",

		effect: {
			ja: "自分のベンチのエネルギーがついているポケモンの数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card