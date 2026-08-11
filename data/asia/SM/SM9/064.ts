import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハクリュー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'ja-jp': "天候を 操ると 信じられ ハクリューの 棲む 湖には お供え物が 絶えない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たつまき" },
			damage: 30,
			cost: ["Water", "Lightning"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーをトラッシュする。すべてウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558390,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ミニリュウ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [148],
};

export default card;
