import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "フワンテ",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "あてもなく 浮かぶ 様子から 迷える 魂の道しるべ と 伝える 昔話も ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まいあがる" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908239,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [425],
};

export default card;
