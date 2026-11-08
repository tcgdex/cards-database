import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ケンタロス"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "いかりのつの"
		},

		damage: "20＋",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "コンバットタックル"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701543,
				tcgplayer: 568207,
			},
		},
	],

	retreat: 2
}

export default card