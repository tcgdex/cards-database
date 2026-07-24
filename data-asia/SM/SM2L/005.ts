import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "シャンデラの 炎に 包まれると 魂が 吸い取られ 燃やされる。 抜け殻の 体 だけが 残る。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドームーブ" },
			effect: {
				ja: "自分の番に1回使える。おたがいの場のポケモンにのっているダメカンを1個、おたがいの場の別のポケモンにのせ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 50,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561409,
			},
		},
	],

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [609],
};

export default card;
