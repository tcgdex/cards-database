import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "ふかふかの 体毛は 空気を たくさん 含んで 夏は 涼しく 冬は 温かいのが 特徴。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんきショック" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558673,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [179],
};

export default card;
