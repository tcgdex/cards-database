import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チャデス"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],

	description: {
		'ja-jp': "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "くらがくれ"
		},

		effect: {
			'ja-jp': "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "ひっかける"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761528,
				tcgplayer: 566123,
			},
		},
	],

	retreat: 1
}

export default card