import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラガラガラ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "手にした ホネは 母のホネ。 死してなお 子を想う 母の無念は 炎となって ガラガラを 守る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ファイヤーダンス" },
			cost: [],
			effect: {
				'ja-jp': "自分のトラッシュにある[炎]エネルギーを、相手の場のポケモンについているエネルギーの数ぶん、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "もえるホネブーメラン" },
			damage: "70×",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x70ダメージ。1回でもオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560318,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カラカラ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [105],
};

export default card;
