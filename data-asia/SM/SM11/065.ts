import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミニリュウ",
	},

	illustrator: "Motofumi Fujiwara",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "まだ 弱いので 水底に 身を 潜め 沈んできた ものを 食らいながら ひそかに 暮らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 10,
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557027,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [147],
};

export default card;
