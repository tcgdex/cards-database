import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブラッキー",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'ja-jp': "月の 波動を 体に 浴びると 輪っか模様が ほのかに 輝き 不思議な 力に 目覚めるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シャドーコープ" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708482,
				tcgplayer: 587825,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [197],
};

export default card;
