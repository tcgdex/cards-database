import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
		'zh-tw': "雷吉鐸拉戈V",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "毒を 薄めると 薬に なる。 薬品会社の マスコットに なって 人気者に なった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どつく",
				'zh-tw': "天之吶喊",
			},
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574586,
				tcgplayer: 597402,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [453],
};

export default card;
