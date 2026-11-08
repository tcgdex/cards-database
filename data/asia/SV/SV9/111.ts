import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オンバット"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	dexId: [714],
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "クイックドロー"
		},

		damage: 10,

		effect: {
			'ja-jp': "自分の山札を1枚引く。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807698,
				tcgplayer: 614987,
			},
		},
	],

	retreat: 1,
}

export default card