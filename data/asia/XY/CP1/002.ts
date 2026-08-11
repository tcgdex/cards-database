import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマ団のバクーダ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "炎に 強い バクーダは 団員を 救出するときにも 大活躍 だったぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バーンドラフト" },
			effect: {
				'ja-jp': "自分のトラッシュから[炎]または[闘]エネルギーを1枚選び、このポケモンにつける。この特性は、自分の番に1回使える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえんだま" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563722,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマ団のドンメル",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [323],
};

export default card;
