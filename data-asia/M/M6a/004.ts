import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イルミーゼ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ばつぐんフェロモン" },
			effect: {
				ja: "自分の場に「バルビート」がいるなら、はたらく。このポケモンがいるかぎり、おたがいのバトルポケモンの弱点は「×3」で計算する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908182,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [314],
};

export default card;
