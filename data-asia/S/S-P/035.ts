import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ペコペコ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "でんきショック" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463089,
				tcgplayer: 597255,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [877],
};

export default card;
