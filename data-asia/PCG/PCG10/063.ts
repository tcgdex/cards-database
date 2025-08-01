import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "アロン",
	},


	category: "Pokemon",
	dexId: [304],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "深く掘ります",
			},
			effect: {
				ja: "廃棄パイルを検索して、エネルギーカードを紹介し、相手に見せて、手に入れてください。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "取り組む",
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
