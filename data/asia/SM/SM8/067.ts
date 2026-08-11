import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハピナス",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'ja-jp': "ふわふわの 体毛は センサー。 ポケモンや 人の 気持ちを キャッチすることが できるのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハッピーサプリ" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分のバトルポケモンの特殊状態を1つ回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワフルビンタ" },
			damage: "80×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数x80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558706,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラッキー",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [242],
};

export default card;
