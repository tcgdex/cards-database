import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		ja: "しつこく 付きまとわれると 心を 開かなくなる。 懐いてきても 過剰な スキンシップは 禁物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557368,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [725],
};

export default card;
