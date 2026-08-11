import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "たくさんの ピカチュウを 集め 発電所を 造る 計画が 最近 発表 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽではたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "でんきショック" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
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
				cardmarket: 560061,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [25],
};

export default card;
