import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "慣れれば 人懐っこいのだが 野生では イワンコと 縄張りを 巡って 激しく 争っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557363,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [58],
};

export default card;
