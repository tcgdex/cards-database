import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "quagsire",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [195],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "サーフィン",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "地震",
			},
			effect: {
				ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 60,
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
