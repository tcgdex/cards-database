import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャースVMAX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "キョダイコバン" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463044,
				tcgplayer: 597249,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャースV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [52],
};

export default card;
