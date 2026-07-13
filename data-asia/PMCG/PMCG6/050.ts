import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		// Sabrina's Haunter
		ja: "ナツメのゴースト",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "ナイトスピリット",
			},
			effect: {
				ja: "SabrinaのGastly、SabrinaのHaunter Band Sabrina's Gengarの総数に等しい数のコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575387
			},
		},
	],
};

export default card
