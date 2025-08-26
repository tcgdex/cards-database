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
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "メタポッドへの攻撃によって与えられたすべての損傷は、20 <em>（脱力感と抵抗を適用した後）</em>に減少します。",
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
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
