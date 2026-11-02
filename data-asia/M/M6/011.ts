import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ウインディ",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "堂々とした 鳴き声は 威厳に あふれ 聞いたものは 思わず ひれ伏してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はりきりファング" },
			damage: "90+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が4枚以下なら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ヒートタックル" },
			damage: 200,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899854,
				tcgplayer: 709167,
			},
		},
	],

	evolveFrom: {
		ja: "ガーディ",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [59],
};

export default card;
