import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤドン",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "午後の昼寝",
			},
			effect: {
				'ja-jp': "デッキをサイキックエネルギーカードに検索し、slowpokeに添付してください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "ヘッドバット",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575737
			},
		},
	],
};

export default card
