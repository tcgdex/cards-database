import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アメモース",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "羽や 触角は 湿気が 苦手。 雨上がりには 太陽の ほうを 向いて 身体を 乾かす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "びっくりもよう" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手の場のポケモンについている特殊エネルギーを、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "ハリケーンウイング" },
			damage: "40×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数x40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558971,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アメタマ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [284],
};

export default card;
