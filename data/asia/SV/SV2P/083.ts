import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ノココッチ"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [982],
	hp: 140,
	types: ["Colorless"],

	description: {
		'ja-jp': "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "どろかけ"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ほりにげフラッシュ"
		},

		damage: 100,

		effect: {
			'ja-jp': "相手のバトルポケモンをマヒにする。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
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
				cardmarket: 707650,
				tcgplayer: 567840,
			},
		},
	],

	retreat: 3
}

export default card