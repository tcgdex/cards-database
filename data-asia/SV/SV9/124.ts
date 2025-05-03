import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ボルケニオンex"
	},

	illustrator: "akagi",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やけつくじょうき"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをやけどにする。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートサイクロン"
		},

		damage: 160,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card