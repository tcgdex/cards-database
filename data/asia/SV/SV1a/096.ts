import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マスカーニャex"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ブーケマジック"
		},

		effect: {
			'ja-jp': "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のベンチポケモン1匹に、ダメカンを3個のせる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "スクラッチネイル"
		},

		damage: "100＋",

		effect: {
			'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、120ダメージ追加。"
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
				cardmarket: 701560,
				tcgplayer: 568219,
			},
		},
	],

	retreat: 2
}

export default card