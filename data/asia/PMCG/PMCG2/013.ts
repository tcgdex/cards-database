import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドクイン",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [31],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "彼氏",
			},
			effect: {
				'ja-jp': "20のダメージに加えて、プレイ中のニドキングごとに20ダメージをさらに20回かけます。",
			},

		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メガパンチ",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants : [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576630
			},
		},
	],
};

export default card
