import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
		'zh-tw': "波克比",
		'zh-cn': "波克比",
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。",
		'zh-tw': "殼內好像塞滿了許多幸福， 據說只要溫柔地對待牠， 牠就會把幸運分給對方。",
		'zh-cn': "殼內好像塞滿了許多幸福， 據說只要溫柔地對待牠， 牠就會把幸運分給對方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "拍擊",
				'zh-cn': "拍擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793479,
				tcgplayer: 587625,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [175],
};

export default card;
