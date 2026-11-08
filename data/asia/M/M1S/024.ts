import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユキハミ"
	},
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	description: {
		'ja-jp': "エサは地面に積もった雪。柔らかな新雪を好み山頂目指して食べ進む。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "かくれる"
		},
		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840576,
				tcgplayer: 647275,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [872]
}

export default card
