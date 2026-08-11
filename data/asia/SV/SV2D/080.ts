import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タギングル"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "どくえき"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			'ja-jp': "カラフルグラフィティ"
		},

		damage: "40×",

		effect: {
			'ja-jp': "自分の手札から基本エネルギーを好きなだけトラッシュし、トラッシュした基本エネルギーのタイプの数×40ダメージ。"
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
				cardmarket: 707676,
				tcgplayer: 565942,
			},
		},
	],

	retreat: 1
}

export default card