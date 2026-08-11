import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドッコラー",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "角材を 振り回して 戦う。 重い 角材を 苦も なく 持つようになると 進化は 近い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けたぐり" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "かいりき" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863690,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [532],
};

export default card;
