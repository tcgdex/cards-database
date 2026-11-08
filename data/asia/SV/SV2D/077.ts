import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナカヌチャン"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	dexId: [958],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "じゃれつく"
		},

		damage: "30＋",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ふんさいプレス"
		},

		damage: 60,

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
				cardmarket: 707673,
				tcgplayer: 565939,
			},
		},
	],

	retreat: 2
}

export default card