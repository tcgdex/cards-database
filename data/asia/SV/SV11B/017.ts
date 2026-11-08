import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シャンデラ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'ja-jp': "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はじけるひばしら" },
			damage: "50+",
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分のトラッシュに「基本エネルギー」が10枚以上あるなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "もえつくす" },
			damage: 180,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "holo" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		'ja-jp': "ランプラー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [609],

	thirdParty: {
		cardmarket: 828463,
		tcgplayer: 636371,
	},
};

export default card;
