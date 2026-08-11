import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ドオーex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "どくのぬまち"
		},

		effect: {
			'ja-jp': "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ニードルボーン"
		},

		damage: 200,

		effect: {
			'ja-jp': "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。"
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
				cardmarket: 701551,
				tcgplayer: 568214,
			},
		},
	],

	retreat: 3
}

export default card