import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "カブト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [140],
	hp: 50,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "厚いシェル",
			},
			effect: {
				ja: "進化したポケモンからのカブトへの攻撃によって与えられたすべての損傷は、衰弱と抵抗を適用した後）10増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 30,
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
