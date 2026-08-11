import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スターミーV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "スピードスター"
		},

		damage: 50,

		effect: {
			'ja-jp': "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'ja-jp': "エナジースパイラル"
		},

		damage: "50×",

		effect: {
			'ja-jp': "相手の場のポケモンについているエネルギーの数×50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609843,
				tcgplayer: 570645,
			},
		},
	],

	retreat: 0
}

export default card