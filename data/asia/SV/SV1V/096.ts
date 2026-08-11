import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "テツノワダチex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "トリプルレーザー"
		},

		effect: {
			'ja-jp': "相手のポケモン3匹に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'ja-jp': "サイバネホイール"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693171,
				tcgplayer: 568322,
			},
		},
	],

	retreat: 3
}

export default card