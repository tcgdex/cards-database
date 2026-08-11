import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ロズレイド"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [407],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "かぐわしい 花の 香りで 相手を 惑わせ いばらの ムチで 激しく 打ちつける。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "どくのムチ"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "アサシンローズ"
		},

		damage: 60,

		effect: {
			'ja-jp': "相手のバトルポケモンが特殊状態なら、相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609836,
				tcgplayer: 570638,
			},
		},
	],

	retreat: 1,
}

export default card