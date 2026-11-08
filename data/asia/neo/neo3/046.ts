import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Farfetch'd",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "突風",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ネギのジャブ",
			},
			effect: {
				'ja-jp': "この攻撃は、次のターン中に使用することはできません。 （ベンチングファーフェッチはこの効果を終了します。）",
			},
			damage: 40,
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
