import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "体の 色を 変えて 景色に 溶けこみ 獲物に 忍び寄る。 お腹の 模様は 消せないのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ユニットカラー２" },
			effect: {
				ja: "このポケモンに「ユニットエネルギー雷超鋼」がついているかぎり、このポケモンは[雷][超][鋼]の3つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559039,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [352],
};

export default card;
