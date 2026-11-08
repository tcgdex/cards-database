import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒスイ ダイケンキVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'ja-jp': "むじひなやいば"
		},

		damage: "110＋",

		effect: {
			'ja-jp': "相手のバトルポケモンにダメカンがのっているなら、110ダメージ追加。"
		}
	}, {
		name: {
			'ja-jp': "特性"
		}
	}, {
		name: {
			'ja-jp': "ザンゲツスター"
		},

		effect: {
			'ja-jp': "自分の番に使える。相手のポケモン1匹に、ダメカンを4個のせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609859,
				tcgplayer: 570661,
			},
		},
	],

	retreat: 2
}

export default card