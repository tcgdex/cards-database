import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラブトロス"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	dexId: [905],
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "海を越えて 飛来したらば 厳しき冬の 終わりを知る。 慈愛が ヒスイの地に 新しき命 芽吹かせるとの 伝承あり。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ハートサイン"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ラブレゾナンス"
		},

		damage: "80＋",

		effect: {
			'ja-jp': "自分の場に、相手の場のポケモンと同じタイプのポケモンがいるなら、120ダメージ追加。"
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
				cardmarket: 761534,
				tcgplayer: 566129,
			},
		},
	],

	retreat: 1
}

export default card