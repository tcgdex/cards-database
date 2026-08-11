import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マラカッチ"
	},

	illustrator: "Ounishi",
	rarity: "None",
	category: "Pokemon",
	dexId: [556],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "さくれつばり"
		},

		effect: {
			'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを6個のせる。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "おいつめる"
		},

		damage: 20,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807688,
				tcgplayer: 614977,
			},
		},
	],

	retreat: 2,
}

export default card