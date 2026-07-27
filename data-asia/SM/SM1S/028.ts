import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモウム",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "死んだように まったく 動かないが 触れると ほのかに 温かい。 大昔は 星の繭と 呼ばれた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "テレポート" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561705,
			},
		},
	],

	evolveFrom: {
		ja: "コスモッグ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [790],
};

export default card;
