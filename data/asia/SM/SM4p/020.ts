import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラサンド",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "雪山に 棲む。 鋼の甲羅は とても 頑丈だが 硬すぎて 身体を 丸めることが できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるくなる" },
			cost: [],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "アイスボール" },
			damage: 30,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560053,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [27],
};

export default card;
