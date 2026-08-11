import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "togepi",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "魅力",
			},
			effect: {
				'ja-jp': "防御するポケモンが相手の次のターン中に攻撃した場合、それが与える損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "スパイクボールタックル",
			},
			effect: {
				'ja-jp': "Togepiはそれ自体に10ダメージを与えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
