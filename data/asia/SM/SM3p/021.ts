import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーダイル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "普段は ゆっくりとした 動きだが 獲物に かみつくときは 目にも 止まらない スピードだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 130,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560179,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アリゲイツ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [160],
};

export default card;
