import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニンフィア",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		'ja-jp': "ひとたび 戦いとなれば 自分の 何倍もある ドラゴンポケモンにも いっさい怯まず 飛びかかっていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ムーンフォース" },
			damage: 30,
			cost: ["Fairy"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "しんあいのはどう" },
			damage: "80+",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "この番、手札から「TAG TEAM」のサポートを出して使っていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554936,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [700],
};

export default card;
