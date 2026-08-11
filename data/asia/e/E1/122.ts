import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーレム",
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
				'ja-jp': "ロックボディ",
			},
			effect: {
				'ja-jp': "ゴーレムへの攻撃によって与えられたすべての損傷は、衰弱と抵抗を適用した後）10増加します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "岩の転倒",
			},
			effect: {
				'ja-jp': "抵抗を適用しないでください。",
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
