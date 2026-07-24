import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンド",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "火山の 噴火から 逃げるうちに 雪山に 移り棲んだ。 氷の 甲羅は 鋼並みの 硬さ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はしゃぐ" },
			cost: [],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "メタルクロー" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554902,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [27],
};

export default card;
