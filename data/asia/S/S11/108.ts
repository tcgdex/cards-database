import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャイキングV",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じょうきげん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "おたからラッシュ" },
			damage: "20×",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "自分の手札の枚数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668226,
				tcgplayer: 570039,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [863],
};

export default card;
