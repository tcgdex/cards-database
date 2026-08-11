import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオー",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	description: {
		ja: "とにかく どでかいので 人気。 ホエルオーウォッチングは 各地で 人気の 観光プラン なのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひきしお 200-" },
			cost: ["Water", "Water", "Water", "Water"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x40ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558987,
			},
		},
	],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
