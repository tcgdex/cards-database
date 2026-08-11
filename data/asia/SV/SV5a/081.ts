import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノイバラex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "イニシャライズ"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるかぎり、おたがいの場の「ルールを持つポケモン」（「未来」のポケモンをのぞく）の特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ボルトサイクロン"
		},

		damage: 140,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761541,
				tcgplayer: 566136,
			},
		},
	],

	retreat: 4
}

export default card