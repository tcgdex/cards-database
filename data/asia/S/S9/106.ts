import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ライチュウV"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "ファストチャージ"
		},

		effect: {
			'ja-jp': "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からエネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'ja-jp': "ダイナミックスパーク"
		},

		damage: "60×",

		effect: {
			'ja-jp': "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
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
				cardmarket: 606271,
				tcgplayer: 569734,
			},
		},
	],

	retreat: 1
}

export default card