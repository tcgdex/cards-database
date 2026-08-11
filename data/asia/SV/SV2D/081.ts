import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イッカネズミ"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [925],
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "寝床や エサを 食べる 場所など 用途に 合わせて いくつも 部屋が 分かれた 大きな 巣を 作る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ひっぱたく"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かじりまくる"
		},

		effect: {
			'ja-jp': "自分の場の「イッカネズミ」の数ぶんのダメカンを、相手のポケモン全員に、それぞれのせる。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707677,
				tcgplayer: 565943,
			},
		},
	],

	retreat: 1
}

export default card