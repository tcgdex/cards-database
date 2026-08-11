import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガドラミドロex",
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
				'ja-jp': "相手のポケモン全員についている「ポケモンのどうぐ」と「特殊エネルギー」を、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "デッドリーポイズン" },
			cost: ["Water", "Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は16個になる。",
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
		'ja-jp': "クズモー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [691],

	suffix: "EX",
};

export default card;
