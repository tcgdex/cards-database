import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スバメ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "寒い 季節は 苦手。暖かい 土地を 探し １日 ３００キロの 距離を 飛んで 移動する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つばさでうつ" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863881,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [276],
};

export default card;
