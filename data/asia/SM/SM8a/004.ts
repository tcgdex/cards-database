import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メリープ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "ふかふかの 体毛は 空気を たくさん 含んで 夏は 涼しく 冬は 温かいのが 特徴。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ショックボルト" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンについている[雷]エネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558578,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [179],
};

export default card;
