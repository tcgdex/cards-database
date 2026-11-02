import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "非常に 賢いことで 知られる。 未熟な トレーナーは 見下す ベテラン向けの ポケモンだぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もりのしゅうりや" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにある「ポケモンのどうぐ」を3枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "しねんのずつき" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560267,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [765],
};

export default card;
