import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コンパン",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [48],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "スタン胞子",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "リーチライフ",
			},
			effect: {
				'ja-jp': "Venonatから多くのダメージカウンターを除去し、防御ポケモンに与えられた損傷に等しい（脱力感と抵抗を適用した後）。 Venonatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576652
			},
		},
	],
};

export default card
