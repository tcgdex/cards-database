import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エレザード"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	dexId: [695],
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "かつて 滅びた 砂漠の 国で 大事に されていた。 財宝と ともに ガラル地方へ やってきた。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "ワイルドボルト"
		},

		damage: 70,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。"
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
				cardmarket: 761533,
				tcgplayer: 566128,
			},
		},
	],

	retreat: 1,
}

export default card