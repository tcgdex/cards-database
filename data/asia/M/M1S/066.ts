import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シシコ"
	},
	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	description: {
		'ja-jp': "幼いうちにメスのカエンジシに狩りを教わるが成長すると群れを離れて独り立ちする。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ほのお"
		},
		damage: 30,
		cost: ["Fire", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840625,
				tcgplayer: 647264,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [667]
}

export default card
