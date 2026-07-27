import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるジラーチ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "目覚めた とき 頭の 短冊に 書かれた 願い事を かなえると 大昔から 語り継がれてきた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほしのさだめ" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "相手の進化しているバトルポケモンから、「進化カード」をすべてはがして退化させる。はがしたカードは、相手の手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560201,
			},
		},
	],

	retreat: 1,
	rarity: "Shiny Ultra Rare",
	dexId: [385],
};

export default card;
