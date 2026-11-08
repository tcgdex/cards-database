import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "デカヌチャンex"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ビッグハンマー"
		},

		damage: "30×",

		effect: {
			'ja-jp': "自分の手札の枚数×30ダメージ。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ふんさいプレス"
		},

		damage: 140,

		effect: {
			'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707704,
				tcgplayer: 565955,
			},
		},
	],

	retreat: 2
}

export default card