import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバット",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "好物は 果物。 超音波を あてて よく 熟した ものだけを 選び出して 食らう グルメなのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エアスラッシュ" },
			damage: 50,
			cost: ["Psychic", "Darkness"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557032,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [714],
};

export default card;
