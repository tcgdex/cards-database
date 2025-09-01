import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュ",
	},

	rarity: "Rare Holo",
	category: "Pokemon",
	dexId: [26],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄物のエネルギーカードを廃棄することを検索し、ライチュに添付してください。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "Raichuに取り付けられたすべてのエネルギーカードを捨てます。",
			},
			damage: 100,
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
