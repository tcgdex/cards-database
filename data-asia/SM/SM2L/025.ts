import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "親分の ように 慕っている ゴロンダの 仕草を 真似ながら 一人前に なっていくぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "からてチョップ 60-" },
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561429,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [674],
};

export default card;
