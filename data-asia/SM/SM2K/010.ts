import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンド",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "雪山に 棲む。 鋼の甲羅は とても 頑丈だが 硬すぎて 身体を 丸めることが できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるくなる" },
			cost: [],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
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
				cardmarket: 561476,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [27],
};

export default card;
