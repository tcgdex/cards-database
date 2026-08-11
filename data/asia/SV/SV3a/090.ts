import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガブリアスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ハイドロランダー"
		},

		damage: 160,

		effect: {
			'ja-jp': "自分のトラッシュから「基本エネルギー」を3枚まで選び、ベンチポケモンに好きなようにつける。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ソニックダイブ"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 734337,
				tcgplayer: 566948,
			},
		},
	],

	retreat: 0,
}

export default card