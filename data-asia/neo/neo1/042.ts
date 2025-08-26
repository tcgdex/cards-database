import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [172],
	hp: 30,
	types: ["Lightning"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "zzzap",
			},
			effect: {
				ja: "ポケモンパワーを持つプレイ中の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
