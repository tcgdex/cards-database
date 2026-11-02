import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン2",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ＡＩ機能を 搭載した 結果 ポリゴン２ 同士にしか わからない 謎の 言語を 話しはじめた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パワーボール" },
			damage: 50,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740417,
				tcgplayer: 587866,
			},
		},
	],

	evolveFrom: {
		ja: "ポリゴン",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [233],
};

export default card;
