import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "サンカーン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [191],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "成長",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、手からサンカーンに2匹の草エネルギーカードを2枚取り付けることができます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "メガドレイン",
			},
			effect: {
				ja: "防御ポケモンに与えられたダメージの半分に等しいサンカーンから多数のダメージカウンターを削除します（脱力感と抵抗を適用した後）（最も近い10に丸められた）。 Sunkernのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
