import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "メテノ"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [774],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "外殻の むけた 姿。 コアの 色の 違いは 食べた エサの 成分に よるもの。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぶっとびメテオ"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチにいるなら、自分の手札からエネルギーをこのポケモンにつけるたび、1回使える。このポケモンをバトルポケモンと入れ替える。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じゅうりょくタックル"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card