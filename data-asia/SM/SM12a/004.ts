import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハネッコ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "風に 流されて 漂う。 野山に ハネッコが 集まり出すと 春が 訪れると 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543386,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [187],
};

export default card;
