import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タッツー",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "潮の 流れが 穏やかな 海に 棲む。 襲われると 真っ黒な 墨を吐いて その隙に 逃げだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Water"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
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
			type: "normal",
			thirdParty: {
				cardmarket: 863448,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [116],
};

export default card;
