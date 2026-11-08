import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "numel",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [322],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "密集",
			},
			effect: {
				'ja-jp': "進化したポカモン（あなたと相手の両方）からの攻撃によってnumelに与えられた損害は20（脱力感と抵抗を適用した後）に20減少します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ラム",
			},
			damage: 10,
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
