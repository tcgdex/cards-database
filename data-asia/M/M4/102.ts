import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガドラミドロex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふしょくえき" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についている「ポケモンのどうぐ」と「特殊エネルギー」を、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "デッドリーポイズン" },
			cost: ["Water", "Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は16個になる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877343,
			},
		},
	],

	evolveFrom: {
		ja: "クズモー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [691],

	suffix: "EX",
};

export default card;
