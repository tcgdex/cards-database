import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのジャンプラフ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [189],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "綿吸収",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。次に、防御ポケモンに与えられたダメージに等しいエリカのジャンプラフから多くのダメージカウンターを削除します（脱力感と抵抗を適用した後）。 Erikaのジャンプラフのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
