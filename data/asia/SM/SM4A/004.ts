import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タマタマ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "テレパシーで 仲間と 交信する。 植物と ある種の タイプの 遺伝子を 併せ持つと いう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいみんじゅつ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560249,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [102],
};

export default card;
