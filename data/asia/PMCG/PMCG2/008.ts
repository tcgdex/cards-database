import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドリーナ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [30],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "超音速",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},

		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ダブルキック",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576632
			},
		},
	],
};

export default card
