import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "波動と 呼ばれる 波を 見て 人や ポケモンの 気持ちを 知る。 危険な 相手には 近付かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "キック" },
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557304,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [447],
};

export default card;
