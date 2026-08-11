import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホエルオー",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	description: {
		'ja-jp': "とにかく どでかいので 人気。 ホエルオーウォッチングは 各地で 人気の 観光プラン なのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひきしお 200-" },
			cost: ["Water", "Water", "Water", "Water"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x40ダメージぶん、このワザのダメージは小さくなる。",
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
		'ja-jp': "ホエルコ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [321],
};

export default card;
