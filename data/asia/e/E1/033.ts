import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "メタポッド",
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
				ja: "外骨格",
			},
			effect: {
				ja: "メタポッドへの攻撃によって与えられたすべての損傷は、衰弱と抵抗を適用した後）20増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ロールアウトする",
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
