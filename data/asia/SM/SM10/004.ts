import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラフレシア",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バラエティかふん" },
			effect: {
				'ja-jp': "自分の番に1回使える。コインを1回投げオモテなら、どく・やけど・ねむり・こんらんの中から1つを選び、相手のバトルポケモンをその特殊状態にする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ジャイアントブルーム" },
			damage: 90,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557359,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "クサイハナ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [45],
};

export default card;
