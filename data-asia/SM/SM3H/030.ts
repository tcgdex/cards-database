import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "トップを 目指すはずが 雪山に 迷い登り 寒さに 耐えるうちに 毛が 生えてきて 進化していた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガッツハンマー" },
			damage: 80,
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンにも、このポケモンにのっているダメカンの数x10ダメージ。",
			},
		},
		{
			name: { ja: "ダブルスタンプ" },
			damage: "80+",
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "コインを2回投げ、オモテの数x40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561094,
			},
		},
	],

	evolveFrom: {
		ja: "マケンカニ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [740],
};

export default card;
