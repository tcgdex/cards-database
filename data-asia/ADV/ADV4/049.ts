import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "マチョップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ナックルパンチ",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "空手チョップ",
			},
			effect: {
				ja: "Machopのダメージカウンターごとに30ダメージを引いた10ダメージを引いた。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};
