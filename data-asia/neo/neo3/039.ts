import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "砂利",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [75],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "地震",
			},
			effect: {
				ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "岩の転倒",
			},
			effect: {
				ja: "抵抗を適用しないでください。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
