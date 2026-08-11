import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハヤシガメ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "きれいな 水が わき出る 場所を 知っていて 仲間の ポケモンを 背中に 乗せて そこまで 運ぶ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "メガドレイン" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 80,
			cost: ["Grass", "Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559961,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナエトル",
	},

	retreat: 4,
	rarity: "Common",
	dexId: [388],
};

export default card;
