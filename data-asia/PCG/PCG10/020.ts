import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "スフィアル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [363],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "防衛カール",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にすべてのダメージがスフィアルに与えられたことを防ぎます。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "オーロラビーム",
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
