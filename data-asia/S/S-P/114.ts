import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "怒ったり 驚いたりすると 全身の 毛が 針の ように 逆立って 相手を つらぬく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいでん" },
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "かみなり" },
			damage: 160,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525255,
				tcgplayer: 597315,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 0,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [135],
};

export default card;
