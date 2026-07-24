import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "６匹で １匹。 なにかあって １匹 減っても 翌朝に なると 必ず ６匹に 戻っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やどりぎのタネ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556992,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [102],
};

export default card;
