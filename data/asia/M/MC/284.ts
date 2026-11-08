import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミライドンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スラッシュクロー" },
			damage: 40,
			cost: ["Lightning"],
		},
		{
			name: { ja: "ハドロンスパーク" },
			damage: "120+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex」なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863580,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [1008],

	suffix: "EX",
};

export default card;
