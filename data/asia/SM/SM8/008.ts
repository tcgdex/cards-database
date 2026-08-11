import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ハネッコ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "風に 流されて 漂う。 野山に ハネッコが 集まり出すと 春が 訪れると 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「ハネッコ」を1枚、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558647,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [187],
};

export default card;
