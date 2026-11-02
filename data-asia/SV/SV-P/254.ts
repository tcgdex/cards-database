import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキのホウオウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こんじきのほのお" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から「基本[R]エネルギー」を2枚まで選び、ベンチの「ヒビキのポケモン」1匹につける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャイニングフェザー" },
			damage: 160,
			cost: ["Fire", "Fire", "Fire", "Fire"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「50」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 813952,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [250],

	suffix: "EX",
};

export default card;
