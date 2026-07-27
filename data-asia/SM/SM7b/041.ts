import { Card } from "../../../interfaces";
import Set from "../SM7b";

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
			name: { ja: "ユニットカラー3" },
			effect: {
				ja: "このポケモンに「ユニットエネルギー闘悪妖」がついているかぎり、このポケモンは[闘][悪][妖]の3つのタイプになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558866,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [352],
};

export default card;
