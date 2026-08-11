import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ルギアVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ストームダイブ"
		},

		damage: 220,

		effect: {
			'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。"
		}
	}, {
		name: {
			'ja-jp': "特性"
		}
	}, {
		name: {
			'ja-jp': "アッセンブルスター"
		},

		effect: {
			'ja-jp': "自分の番に使える。自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）を2枚まで選び、ベンチに出す。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680857,
				tcgplayer: 570181,
			},
		},
	],

	retreat: 2,
}

export default card