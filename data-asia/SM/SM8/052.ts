import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "カポエラー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "踊るように 華麗で 滑らかな キック技に 見とれていると きつい 一撃を お見舞いされる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうそくスピン" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "トリプルキック" },
			damage: "40×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558691,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [237],
};

export default card;
