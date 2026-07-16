import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "独特の リズムで 腰を 振る。 アローラに 棲む ルージュラは そのキレが 実に 素晴らしい。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あやしいこしつき" },
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンにのっているダメカンを1個、自分の別のポケモンにのせ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メロメロアタック" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556994,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [124],
};

export default card;
