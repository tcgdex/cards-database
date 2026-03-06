import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "Igglybuff",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [174],
	hp: 30,
	types: ["Colorless"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーヒール",
			},
			effect: {
				ja: "エネルギーカードが取り付けられたポケモンを1つ選択します。そのポケモンから1つのダメージカウンターを取り外します。",
			},
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
