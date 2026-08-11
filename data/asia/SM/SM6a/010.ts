import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エンニュート",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "毒ガスには 多くの フェロモンが 含まれている。 薄めることで 官能的な 香水が できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フレイムサークル" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Colorless"],
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
				cardmarket: 559246,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤトウモリ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [758],
};

export default card;
