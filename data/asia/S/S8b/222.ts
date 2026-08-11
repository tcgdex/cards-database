import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウV",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: ["Lightning"],
			effect: {
				'ja-jp': "自分の山札から[雷]エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "10まんボルト" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587020,
				tcgplayer: 571474,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [25],
};

export default card;
