import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サカキのニドリーナ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [30],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "ポイズンスティングタックル",
			},
			effect: {
				'ja-jp': "GiovanniのNidorinaはそれ自体に20のダメージを与えます。コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ボディスラム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575374
			},
		},
	],
};

export default card
