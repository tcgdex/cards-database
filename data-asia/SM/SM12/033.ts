import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "クズモー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "藻屑に 紛れ 大きなポケモンに 襲われないよう じっと している。 腐った 海草が 主な エサ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくをはく" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554847,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [690],
};

export default card;
