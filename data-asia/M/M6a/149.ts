import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバットG",
	},

	illustrator: "Makoto Imai",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "フラッシュバイツ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のポケモン1匹に、ダメージカウンターを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくどくのキバ" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手をどくにする。ポケモンチェックのとき、このどくでのせるダメージカウンターの数は2個になる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908327,
			},
		},
	],

	retreat: 0,
	rarity: "Classic Collection",
	dexId: [169],
};

export default card;
