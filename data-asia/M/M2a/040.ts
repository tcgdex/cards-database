import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "食べた 雪から 得た 冷気を 体内の 器官で 増幅して 氷柱のような トゲを 作る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つらら" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861283,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861592,
			},
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 861593,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [872],
};

export default card;
