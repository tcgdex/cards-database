import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャースV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ネコにこばん" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "スラッシュクロー" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463039,
				tcgplayer: 597248,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [52],
};

export default card;
