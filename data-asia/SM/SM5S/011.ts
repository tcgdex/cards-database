import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "湿地帯に 生える 木に巻きつき 甘い香りの だえきで 獲物を 誘き寄せては ひとくちで 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガブガブ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
		{
			name: { ja: "おおいかぶさる 90-" },
			cost: ["Grass", "Grass"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559965,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [455],
};

export default card;
