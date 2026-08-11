import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ホップのウールー"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "None",
	category: "Pokemon",
	dexId: [831],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "けとばす"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807699,
				tcgplayer: 614988,
			},
		},
	],

	retreat: 1
}

export default card