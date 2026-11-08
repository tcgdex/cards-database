import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビブラーバ"
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	dexId: [329],
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "翅を 激しく 振動させて 超音波を 発生。 気絶した 獲物を 消化液で 溶かす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "いやなおと"
		},

		effect: {
			'ja-jp': "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+50」される。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "カッターウインド"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788044,
				tcgplayer: 579453,
			},
		},
	],

	retreat: 1,
	rarity: "None",
}

export default card