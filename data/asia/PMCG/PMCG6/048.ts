import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのヤドラン",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "昼寝",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、サブリナのスローブロとサブリナのスローブロから3つのダメージカウンターを削除しました。 SabrinaのSlowbroのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'ja-jp': "叫ぶヘッドバット",
			},
			effect: {
				'ja-jp': "次のターン中にこの攻撃を使用することはできません。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575392
			},
		},
	],
};

export default card
