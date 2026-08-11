import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オンバーンex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "おんみつひこう"
		},

		damage: 70,

		effect: {
			'ja-jp': "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			'ja-jp': "ドミネートエコー"
		},

		damage: 140,

		effect: {
			'ja-jp': "次の相手の番、相手は手札から特殊エネルギーを出してつけられず、スタジアムも出せない。"
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707685,
				tcgplayer: 565951,
			},
		},
	],

	retreat: 0,
}

export default card