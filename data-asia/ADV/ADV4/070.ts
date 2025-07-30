import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "メタン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [375],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "金属負荷",
			},
			effect: {
				ja: "廃棄物の山を検索して、金属エネルギーカードを添付し、それをメタンに取り付けます。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "金属爪",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
