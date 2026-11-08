import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リーリエのピッピex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "フェアリーゾーン"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手の場のポケモン全員の弱点は、すべてタイプになる。［弱点は「×2」で計算する。］"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "フルムーンロンド"
		},

		damage: "20＋",

		effect: {
			'ja-jp': "おたがいのベンチポケモンの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807702,
				tcgplayer: 614991,
			},
		},
	],

	retreat: 1
}

export default card