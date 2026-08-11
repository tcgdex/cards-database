import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スキスター",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ツインプレイ",
			},
			effect: {
				'ja-jp': "ScytherとScyther Exの任意の組み合わせで、デッキを最大2で検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、対戦相手の次のターン中にScytherに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
