import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コオリッポ"
	},
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	description: {
		'ja-jp': "気温の高い日は仲間同士で頭の氷をくっつけておたがいを冷やしながら過ごす。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "いてつくずつき"
		},
		damage: 20,
		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			'ja-jp': "たいあたり"
		},
		damage: 90,
		cost: ["Water", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840580,
				tcgplayer: 647277,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [875]
}

export default card
