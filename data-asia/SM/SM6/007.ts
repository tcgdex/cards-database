import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "メェークル",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "水と 太陽が あれば 背中の 葉っぱで エネルギーが 作れるので エサを 食べなくても 平気なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せいちょう" },
			cost: ["Grass"],
			effect: {
				ja: "自分の手札にある[草]エネルギーを1枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559552,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [672],
};

export default card;
