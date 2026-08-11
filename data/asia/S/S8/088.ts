import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオガラス",
		'zh-tw': "藍鴉",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "厳しい 戦いを くぐり抜けて 相手の 力量を 正確に 判断する 力が 身についた。",
		'zh-tw': "歷經無數次艱難的戰鬥後，牠學會了該如何正確地判斷敵人的力量。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "みだれづき",
				'zh-tw': "亂擊",
			},
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575643,
				tcgplayer: 569589,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ココガラ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [822],
};

export default card;
