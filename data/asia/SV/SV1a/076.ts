import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ニャローテ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "タネばくだん"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "マジックウィップ"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
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
				cardmarket: 701532,
				tcgplayer: 568199,
			},
		},
	],

	retreat: 1
}

export default card