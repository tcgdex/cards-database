import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グラエナ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [262],
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "１０匹 程度の 群れを 作って 一糸乱れぬ チームワークで 獲物を 追いつめて しとめるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ハッスルバーク"
		},

		effect: {
			'ja-jp': "相手の場に「ポケモンVMAX」がいるなら、このポケモンがワザを使うためのエネルギーは、エネルギー3個ぶん少なくなる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ワイルドタックル"
		},

		damage: 160,

		effect: {
			'ja-jp': "このポケモンにも50ダメージ。"
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
				cardmarket: 609840,
				tcgplayer: 570642,
			},
		},
	],

	retreat: 2,
}

export default card