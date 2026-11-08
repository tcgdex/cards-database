import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グレンアルマ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [936],
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "多くの 武勲を 立てた 戦士の 鎧によって 進化した 姿。 忠誠心の 厚い ポケモン。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ひおくり"
		},

		effect: {
			'ja-jp': "自分の番に何回でも使える。自分のベンチポケモンについているエネルギーを1個選び、バトルポケモンにつけ替える。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "フレイムキャノン"
		},

		damage: 90,

		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693047,
				tcgplayer: 567197,
			},
		},
	],

	retreat: 2
}

export default card