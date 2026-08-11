import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミライドンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "タンデムユニット"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の山札からタイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'ja-jp': "フォトンブラスター"
		},

		damage: 220,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。"
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
				cardmarket: 747712,
				tcgplayer: 567755,
			},
		},
	],

	retreat: 1
}

export default card