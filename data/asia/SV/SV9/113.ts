import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボルケニオンex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "やけつくじょうき"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをやけどにする。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "ヒートサイクロン"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807700,
				tcgplayer: 614989,
			},
		},
	],

	retreat: 3,
}

export default card