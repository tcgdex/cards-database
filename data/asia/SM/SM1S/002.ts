import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "トランセル",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "カラの中には トロトロの 中身が 詰まっている。 ほぼ動かないのは ウッカリ 中身が こぼれないため。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "てっぺき" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "むしくい" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561676,
			},
		},
	],

	evolveFrom: {
		ja: "キャタピー",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [11],
};

export default card;
