import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "togepi",
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
				ja: "魅力",
			},
			effect: {
				ja: "防御するポケモンが相手の次のターン中に攻撃した場合、それが与える損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スパイクボールタックル",
			},
			effect: {
				ja: "Togepiはそれ自体に10ダメージを与えます。",
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
