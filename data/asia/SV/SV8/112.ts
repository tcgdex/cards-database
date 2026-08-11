import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レアコイル",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かじょうほうでん" },
			effect: {
				'ja-jp': "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分のトラッシュから基本エネルギーを3枚まで選び、自分の[L]ポケモンに好きなようにつける。",
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
			type: "holo",
			thirdParty: {
				cardmarket: 793576,
				tcgplayer: 587725,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コイル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [82],
};

export default card;
