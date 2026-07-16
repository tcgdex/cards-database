import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "モグリュー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "両手の ツメを 重ね合わせて 体を 高速 回転させると 猛スピードで 地中を 進む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメをたてる" },
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557011,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [529],
};

export default card;
