import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "レアコイル",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かじょうほうでん" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分のトラッシュから基本エネルギーを3枚まで選び、自分の[L]ポケモンに好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライトニングボール" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861289,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861602,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861603,
			},
		},
	],

	evolveFrom: {
		ja: "コイル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [82],
};

export default card;
