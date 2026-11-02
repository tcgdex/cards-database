import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるのムチ" },
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664342,
				tcgplayer: 597460,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [1],
};

export default card;
