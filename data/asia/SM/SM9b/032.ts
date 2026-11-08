import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ココドラ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "普段は 山奥で 暮らしているが お腹が すくと ふもとに 現われ 線路や 車を 食べてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうちょく" },
			cost: ["Metal"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "メタルクロー" },
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558150,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [304],
};

export default card;
