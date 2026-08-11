import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャースVMAX",
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
				ja: "自分の山札を3枚引く。",
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
		ja: "ニャースV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [52],
};

export default card;
