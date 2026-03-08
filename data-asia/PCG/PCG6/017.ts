import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルゴン（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [372],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "外骨格",
			},
			effect: {
				ja: "攻撃によってシェルゴンに与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ヒートブラスト",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
