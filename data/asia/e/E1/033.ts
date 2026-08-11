import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタポッド",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [11],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "外骨格",
			},
			effect: {
				'ja-jp': "メタポッドへの攻撃によって与えられたすべての損傷は、衰弱と抵抗を適用した後）20増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 10,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
