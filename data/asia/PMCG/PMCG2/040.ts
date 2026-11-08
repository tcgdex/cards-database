import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドードリオ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [85],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "リトリートエイド",
			},
			effect: {
				'ja-jp': "Dodrioがベンチにある限り、アクティブなポケモンを後退させるために{{e}}を支払います。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "Dodrioの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
			},

		},
	],


	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576614
			},
		},
	],
};

export default card
