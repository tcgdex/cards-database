import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "Farfetch'd",
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
				ja: "突風",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ネギのジャブ",
			},
			effect: {
				ja: "この攻撃は、次のターン中に使用することはできません。 （ベンチングファーフェッチはこの効果を終了します。）",
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
