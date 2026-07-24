import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるミュウ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "あらゆる 技を 使うため ポケモンの 先祖と 考える 学者が たくさん いる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんせつのみちびき" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にあるエネルギーを2枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ビーム" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560199,
			},
		},
	],

	retreat: 0,
	rarity: "Shiny Ultra Rare",
	dexId: [151],
};

export default card;
