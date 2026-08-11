import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リザードンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "ばくれつファイヤー"
		},

		damage: "130＋",

		effect: {
			'ja-jp': "このポケモンにダメカンがのっているなら、100ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			'ja-jp': "スターブレイズ"
		},

		damage: 320,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］"
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
				cardmarket: 606283,
				tcgplayer: 569746,
			},
		},
	],

	retreat: 2,
}

export default card