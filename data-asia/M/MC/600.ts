import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンホロウ",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "オスは 頭の 飾りを 揺らして 相手を 威嚇する。 メスの 飛行能力は オスを 上回る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "くわえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を4枚引く。",
			},
		},
		{
			name: { ja: "こうそくフライト" },
			damage: 120,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863902,
			},
		},
	],

	evolveFrom: {
		ja: "ハトーボー",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [521],
};

export default card;
