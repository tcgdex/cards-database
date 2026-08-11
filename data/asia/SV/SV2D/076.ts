import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カヌチャン"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "てつクズひろい"
		},

		effect: {
			'ja-jp': "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ようせいのかぜ"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707672,
				tcgplayer: 565938,
			},
		},
	],

	retreat: 1
}

export default card