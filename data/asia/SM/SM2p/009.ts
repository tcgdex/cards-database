import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンニュート",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "なぜか ♀しか 見つかっていない。 ヤトウモリの♂を 引き連れて 逆ハーレムを 作って 暮らす。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ホットポイズン" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをどくとやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561212,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤトウモリ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [758],
};

export default card;
