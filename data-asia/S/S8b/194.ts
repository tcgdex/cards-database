import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "ふかふかの 毛に 電気を ためこむ。 蓄えすぎて ところどころ つるつるに 禿げあがって しまった。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エレキダイナモ" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュから[雷]エネルギーを1枚選び、ベンチポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレキボール" },
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586933,
				tcgplayer: 571446,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [180],
};

export default card;
