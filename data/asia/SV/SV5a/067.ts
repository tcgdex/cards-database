import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カイロス"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	dexId: [127],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "ツノで 互いを 格付けする。 太く 立派な ツノを 持つ カイロスほど 異性に 人気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "スロークランチ"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "かいりきホーン"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761527,
				tcgplayer: 566122,
			},
		},
	],

	retreat: 2,
}

export default card