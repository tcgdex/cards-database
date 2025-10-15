import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーレム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [76],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ロックボディ",
			},
			effect: {
				ja: "ゴーレムへの攻撃によって与えられたすべての損傷は、衰弱と抵抗を適用した後）10増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "岩の転倒",
			},
			effect: {
				ja: "抵抗を適用しないでください。",
			},
			damage: 60,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
