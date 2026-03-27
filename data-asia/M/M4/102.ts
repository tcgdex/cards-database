import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガドラミドロex",
	},

	illustrator: "Naomi Satō",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふしょくえき" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についているポケモンのどうぐと特殊エネルギーをすべてトラッシュする。",
			},
		},
		{
			name: { ja: "デッドリーポイズン" },
			cost: ["Water", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。その場合、ポケモンチェックのとき置くダメージカウンターは1個のかわり16個になる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	evolveFrom: {
		ja: "クズモー",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [691],

	suffix: "EX",
};

export default card;
