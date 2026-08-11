import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Bellossom",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [182],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "甘い蜜",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、ポケモンの1つからすべてのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "フラワーダンス",
			},
			effect: {
				'ja-jp': "30回のダメージを与えますBellossomを含むカードの数は、あなたがプレイしている名前（これを含む）を持っている名前にあります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
