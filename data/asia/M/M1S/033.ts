import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パチリス"
	},
	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		'ja-jp': "ほっぺに電気袋を持つポケモンの仲間。尻尾から溜まった電気を放出する。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "しびれるまえば"
		},
		damage: 10,
		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけるたび、そのポケモンにダメカンを8個のせる。"
		},
		cost: ["Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840589,
				tcgplayer: 647212,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [417]
}

export default card
