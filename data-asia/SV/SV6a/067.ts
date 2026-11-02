import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "潮の 流れが 穏やかな 海に 棲む。 襲われると 真っ黒な 墨を吐いて その隙に 逃げだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Water"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ひれカッター" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773816,
				tcgplayer: 566318,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [116],
};

export default card;
