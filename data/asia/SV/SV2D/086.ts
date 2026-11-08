import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハラバリーex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ジャンププレス"
		},

		effect: {
			'ja-jp': "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "パラライズボール"
		},

		damage: 160,

		effect: {
			'ja-jp': "のぞむなら、このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。"
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
				cardmarket: 707682,
				tcgplayer: 565948,
			},
		},
	],

	retreat: 3
}

export default card