import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "カブト",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [140],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "古代の保護",
			},
			effect: {
				ja: "あなたのオマニテ、オマスター、カブト、カブトップス、カブトップスのそれぞれは弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "花崗岩の頭",
			},
			effect: {
				ja: "対戦相手の次のターン中、攻撃によってカブトに与えられた損害は10増加します（脱力感と抵抗を適用した後）。",
			},
			damage: 20,
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
