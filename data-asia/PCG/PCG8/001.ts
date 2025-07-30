import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルバサウルス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [1],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "成長",
			},
			effect: {
				ja: "手からブルバサウルスに草のエネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "つる鞭",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited',
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
