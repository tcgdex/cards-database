import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マグカルゴex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "あついマグマ"
		},

		damage: 70,

		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "グラウンドバーン"
		},

		damage: "140＋",

		effect: {
			'ja-jp': "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×140ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761540,
				tcgplayer: 566135,
			},
		},
	],

	retreat: 3,
}

export default card