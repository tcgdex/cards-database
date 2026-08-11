import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハルクジラ"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "がっちりボディ"
		},

		effect: {
			'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "デンジャーマウス"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788042,
				tcgplayer: 579451,
			},
		},
	],

	retreat: 3,
	rarity: "None"
}

export default card