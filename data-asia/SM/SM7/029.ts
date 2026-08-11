import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "サクラビス",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "泳ぐ 姿は とても 優雅。 細い 口で 岩場の すき間に 生えた 海藻を 食べる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さくらしぶき" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558990,
			},
		},
	],

	evolveFrom: {
		ja: "パールル",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [368],
};

export default card;
