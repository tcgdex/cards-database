import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドッコラー",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "角材を 振り回して 戦う。 重い 角材を 苦も なく 持つようになると 進化は 近い。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "けたぐり" }, damage: 10, cost: ["Fighting"] },
		{
			name: { ja: "かいりき" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [532],

	thirdParty: {
		cardmarket: 829376,
		tcgplayer: 636485,
	},
};

export default card;
