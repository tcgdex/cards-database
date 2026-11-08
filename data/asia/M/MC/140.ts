import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤクデ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒートダイブ" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863436,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [850],
};

export default card;
