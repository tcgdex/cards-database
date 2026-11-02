import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "トランセル",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "カラの中には トロトロの 中身が 詰まっている。 ほぼ動かないのは ウッカリ 中身が こぼれないため。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "だっぴ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「40」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561002,
			},
		},
	],

	evolveFrom: {
		ja: "キャタピー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [11],
};

export default card;
