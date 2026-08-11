import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキワラシ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "気づくと アローラで 増えていた。 ユキワラシが 棲みついた 家は 子々孫々に 栄えると いう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひんやり" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "こおりのいぶき" },
			damage: 20,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561481,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [361],
};

export default card;
