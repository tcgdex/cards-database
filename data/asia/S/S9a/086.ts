import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒスイ ジュナイパーVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "サマーソルトフェザー"
		},

		damage: "160＋",

		effect: {
			'ja-jp': "のぞむなら、自分の手札からエネルギーを3枚までトラッシュし、その枚数×30ダメージ追加。"
		}
	}, {
		name: {
			'ja-jp': "特性"
		}
	}, {
		name: {
			'ja-jp': "フウウンスター"
		},

		effect: {
			'ja-jp': "自分の番に使える。自分の手札が8枚になるように、山札を引く。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609854,
				tcgplayer: 570656,
			},
		},
	],

	retreat: 2
}

export default card